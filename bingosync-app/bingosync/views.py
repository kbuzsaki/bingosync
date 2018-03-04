from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse, Http404
from django.shortcuts import render, redirect
from django.core.cache import cache
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.csrf import csrf_exempt
from django.db import transaction
from django.template import loader

import json
import requests
import random

from .settings import SOCKETS_URL, SOCKETS_PUBLISH_URL
from .bingo_generator import BingoGenerator
from .forms import RoomForm, JoinRoomForm, GoalListConverterForm, NewCardForm
from .models import Room, Game, GameType, LockoutMode, Player, Color, Event, ChatEvent, RevealedEvent
from .models import ConnectionEvent, NewCardEvent
from .publish import publish_goal_event, publish_chat_event, publish_color_event, publish_revealed_event
from .publish import publish_connection_event, publish_new_card_event
from .util import generate_encoded_uuid

def rooms(request):
    if request.method == "POST":
        form = RoomForm(request.POST)
        if form.is_valid():
            room = form.create_room()
            creator = room.creator
            _save_session_player(request.session, creator)
            return redirect("room_view", encoded_room_uuid=room.encoded_uuid)
    else:
        form = RoomForm()

    params = {
        "form": form,
        "rooms": Room.get_listed_rooms()
    }
    return render(request, "bingosync/index.html", params)

def room_view(request, encoded_room_uuid):
    if request.method == "POST":
        join_form = JoinRoomForm(request.POST)
        if join_form.is_valid():
            player = join_form.create_player()
            _save_session_player(request.session, player)
            return redirect("room_view", encoded_room_uuid=encoded_room_uuid)
        else:
            room = Room.get_for_encoded_uuid(encoded_room_uuid)
            return _join_room(request, join_form, room)
    else:
        try:
            room = Room.get_for_encoded_uuid(encoded_room_uuid)
            initial_values = {
                "game_type": room.current_game.game_type.value,
                "lockout_mode": room.current_game.lockout_mode.value
            }
            new_card_form = NewCardForm(initial=initial_values)
            player = _get_session_player(request.session, room)
            params = {
                "room": room,
                "game": room.current_game,
                "player": player,
                "sockets_url": SOCKETS_URL,
                "new_card_form": new_card_form,
                "temporary_socket_key": _create_temporary_socket_key(player)
            }
            return render(request, "bingosync/bingosync.html", params)
        except NotAuthenticatedError:
            join_form = JoinRoomForm.for_room(room)
            return _join_room(request, join_form, room)

def _join_room(request, join_form, room):
    params = {
        "form": join_form,
        "room": room,
        "encoded_room_uuid": room.encoded_uuid,
    }
    return render(request, "bingosync/join_room.html", params)

def room_board(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    board = room.current_game.board
    return JsonResponse(board, safe=False)

# AJAX view to render the room settings panel
def room_settings(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    panel = loader.get_template("bingosync/room_settings_panel.html").render({"game": room.current_game}, request)
    return JsonResponse({"panel": panel, "settings": room.settings});

@csrf_exempt
def new_card(request):
    data = json.loads(request.body.decode("utf8"))

    room = Room.get_for_encoded_uuid(data["room"])
    player = _get_session_player(request.session, room)

    #create new game
    game_type = GameType.for_value(int(data["game_type"]))
    lockout_mode = LockoutMode.for_value(int(data["lockout_mode"]))
    seed = data["seed"]

    hide_card = data["hide_card"]

    if game_type == GameType.custom:
        if not seed:
            seed = "0"
        try:
            board_json = json.loads(data["custom_json"])
        except:
            return HttpResponseBadRequest("Invalid board: Invalid JSON")

        if not isinstance(board_json, list):
            return HttpResponseBadRequest("Ivalid board: Board must be a list")

        if len(board_json) != 25:
            return HttpResponseBadRequest("Invalid board: Expected 25 squares but got " + str(len(board_json)))

        for i, square in enumerate(board_json):
            if "name" not in square:
                return HttpResponseBadRequest("Invalid board: Square " + str(i + 1) + " (" + json.dumps(square) + ") is missing a \"name\" attribute")
    else:
        if not seed:
            seed = str(random.randint(1, 1000000))
        board_json = game_type.generator_instance().get_card(seed)

    with transaction.atomic():
        game = Game.from_board(board_json, room=room, game_type_value=game_type.value, lockout_mode_value=lockout_mode.value, seed=seed)

        if hide_card != room.hide_card:
            room.hide_card = hide_card
        room.update_active() # This saves the room

        new_card_event = NewCardEvent(player=player, player_color_value=player.color.value, game_type_value=game_type.value, seed=seed)
        new_card_event.save()
    publish_new_card_event(new_card_event)
    return HttpResponse("Recieved data: " + str(data))

def history(request):
    hide_solo = request.GET.get('hide_solo')

    if hide_solo:
        base_rooms = Room.get_with_multiple_players()
    else:
        base_rooms = Room.objects.all()

    room_list = base_rooms.order_by("-created_date")
    paginator = Paginator(room_list, 10) # Show 25 contacts per page

    page = request.GET.get('page')
    try:
        rooms = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        rooms = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        rooms = paginator.page(paginator.num_pages)

    params = {
        'hide_solo': hide_solo,
        'rooms': rooms,
    }
    return render(request, "bingosync/history.html", params)

def about(request):
    return render(request, "bingosync/about.html")

def room_feed(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    all_events = Event.get_all_for_room(room)
    all_jsons = [event.to_json() for event in all_events]
    return JsonResponse(all_jsons, safe=False)

def room_disconnect(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    _clear_session_player(request.session, room)
    return redirect("rooms")

@csrf_exempt
def goal_selected(request):
    data = json.loads(request.body.decode("utf8"))

    room = Room.get_for_encoded_uuid(data["room"])
    player = _get_session_player(request.session, room)
    game = room.current_game
    slot = int(data["slot"])
    color = Color.for_name(data["color"])
    remove_color = data["remove_color"]

    goal_event = game.update_goal(player, slot, color, remove_color)
    if not goal_event:
        return HttpResponseBadRequest("Blocked by Lockout")
    publish_goal_event(goal_event)
    return HttpResponse("Recieved data: " + str(data))

@csrf_exempt
def chat_message(request):
    data = json.loads(request.body.decode("utf8"))

    room = Room.get_for_encoded_uuid(data["room"])
    player = _get_session_player(request.session, room)
    text = data["text"]

    chat_event = ChatEvent(player=player, player_color_value=player.color.value, body=text)
    chat_event.save()
    publish_chat_event(chat_event)
    return HttpResponse("Recieved data: " + str(data))

@csrf_exempt
def select_color(request):
    data = json.loads(request.body.decode("utf8"))

    room = Room.get_for_encoded_uuid(data["room"])
    player = _get_session_player(request.session, room)
    color = Color.for_name(data["color"])

    color_event = player.update_color(color)
    publish_color_event(color_event)
    return HttpResponse("Received data: ", str(data))

@csrf_exempt
def board_revealed(request):
    data = json.loads(request.body.decode("utf8"))

    room = Room.get_for_encoded_uuid(data["room"])
    player = _get_session_player(request.session, room)

    revealed_event = RevealedEvent(player=player, player_color_value=player.color.value)
    revealed_event.save()
    publish_revealed_event(revealed_event)
    return HttpResponse("Received data: " + str(data))

# TODO: add authentication to limit this route to tornado
@csrf_exempt
def user_connected(request, encoded_player_uuid):
    player = Player.get_for_encoded_uuid(encoded_player_uuid)
    connection_event = ConnectionEvent.atomically_connect(player)
    publish_connection_event(connection_event)
    return HttpResponse()

# TODO: add authentication to limit this route to tornado
@csrf_exempt
def user_disconnected(request, encoded_player_uuid):
    player = Player.get_for_encoded_uuid(encoded_player_uuid)
    connection_event = ConnectionEvent.atomically_disconnect(player)
    publish_connection_event(connection_event)
    return HttpResponse()

# TODO: add authentication to limit this route to tornado
def check_socket_key(request, socket_key):
    try:
        encoded_player_uuid = _get_temporary_socket_player_uuid(socket_key)
        player = Player.get_for_encoded_uuid(encoded_player_uuid)
        json_response = {
            "room": player.room.encoded_uuid,
            "player": player.encoded_uuid
        }
        return JsonResponse(json_response)
    except NotAuthenticatedError:
        raise Http404("Invalid socket key")

def reconcile_connections(request):
    connected_url = SOCKETS_PUBLISH_URL + "/connected"
    response = requests.get(connected_url)
    connected_rooms = response.json()

    active_rooms = Room.get_listed_rooms()
    for room in active_rooms:
        connected_player_uuids = connected_rooms.get(room.encoded_uuid, [])
        for player in room.connected_players:
            if player.encoded_uuid not in connected_player_uuids:
                ConnectionEvent.atomically_disconnect(player)
        room.update_active()

    return HttpResponse()


def goal_converter(request):
    if request.method == "POST":
        form = GoalListConverterForm(request.POST)
        if form.is_valid():
            goal_list_str = form.get_goal_list()
            response = HttpResponse(goal_list_str, content_type="application/json")
            response['Content-Disposition'] = 'attachment; filename="goal-list.js"'
            return response
        return render(request, "bingosync/convert.html", {"form": form})
    else:
        form = GoalListConverterForm.get()

    return render(request, "bingosync/convert.html", {"form": form})


# Helpers for interacting with sessions

AUTHORIZED_ROOMS = 'authorized_rooms'

class NotAuthenticatedError(Exception):
    pass

def _get_session_player(session, room):
    try:
        encoded_player_uuid = session[AUTHORIZED_ROOMS][room.encoded_uuid]
        return Player.get_for_encoded_uuid(encoded_player_uuid)
    except KeyError:
        raise NotAuthenticatedError()

def _clear_session_player(session, room):
    # have to set the session this way so that it saves properly
    authorized_rooms = session.get(AUTHORIZED_ROOMS, {})
    del authorized_rooms[room.encoded_uuid]
    session[AUTHORIZED_ROOMS] = authorized_rooms

def _save_session_player(session, player):
    # have to set the session this way so that it saves properly
    authorized_rooms = session.get(AUTHORIZED_ROOMS, {})
    authorized_rooms[player.room.encoded_uuid] = player.encoded_uuid
    session[AUTHORIZED_ROOMS] = authorized_rooms

def _create_temporary_socket_key(player):
    temporary_socket_key = generate_encoded_uuid()
    cache.set(temporary_socket_key, player.encoded_uuid)
    return temporary_socket_key

def _get_temporary_socket_player_uuid(temporary_socket_key):
    encoded_player_uuid = cache.get(temporary_socket_key)
    if encoded_player_uuid:
        return encoded_player_uuid
    else:
        raise NotAuthenticatedError()


from django.http import HttpResponse, JsonResponse, Http404
from django.shortcuts import render, redirect
from django.core.cache import cache
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.csrf import csrf_exempt

import json
import time

from .settings import SOCKETS_URL
from .bingo_generator import BingoGenerator
from .goals_converter import get_converted_goal_list, ConversionException
from .forms import RoomForm, JoinRoomForm, GoalListConverterForm
from .models import Room, Game, Player, Color, Event, ChatEvent, ConnectionEvent
from .publish import publish_goal_event, publish_chat_event, publish_color_event, publish_connection_event
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
        return _join_room(request, join_form, encoded_room_uuid)
    else:
        try:
            room = Room.get_for_encoded_uuid(encoded_room_uuid)
            player = _get_session_player(request.session, room)
            params = {
                "room": room,
                "game": room.current_game,
                "player": player,
                "sockets_url": SOCKETS_URL,
                "temporary_socket_key": _create_temporary_socket_key(player)
            }
            return render(request, "bingosync/bingosync.html", params)
        except NotAuthenticatedError:
            join_form = JoinRoomForm.for_room(room)
            return _join_room(request, join_form, encoded_room_uuid)

def _join_room(request, join_form, encoded_room_uuid):
    params = {
        "form": join_form,
        "encoded_room_uuid": encoded_room_uuid
    }
    return render(request, "bingosync/join_room.html", params)

def room_board(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    board = room.current_game.board
    return JsonResponse(board, safe=False)

def board_view(request, seed):
    params = {
        "seed": seed,
        "sockets_url": SOCKETS_URL
    }
    return render(request, "bingosync/bingosync.html", params)

def board_json(request, seed):
    generator = BingoGenerator.instance()
    card = generator.get_card(seed)
    return JsonResponse(card, safe=False)

def history(request):
    room_list = Room.objects.order_by("-created_date")
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
        'rooms': rooms
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

    goal_event = game.update_goal(player, slot, color)
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


def goal_converter(request):
    if request.method == "POST":
        form = GoalListConverterForm(request.POST)
        if form.is_valid():
            json_str = get_converted_goal_list()
            response = HttpResponse(json_str, content_type="application/json")
            response['Content-Disposition'] = 'attachment; filename="goal-list.json"'
            return response
    else:
        form = GoalListConverterForm.get()

    return render(request, "bingosync/convert.html", {"form": form})

BETA_GOAL_LISTS_DIR = "./beta_goal_lists"
LATEST_GOAL_LIST = BETA_GOAL_LISTS_DIR + "/latest.json"

def beta_bingo(request):
    # getting a post indicates that we should refresh
    if request.method == "POST":
        goals_json = json.loads(get_converted_goal_list())
        backup_filename = BETA_GOAL_LISTS_DIR + "/" + time.strftime("%Y-%m-%d_%H-%M-%S.json")

        with open(backup_filename, "w") as outfile:
            json.dump(goals_json, outfile, sort_keys=True, indent=4)
        with open(LATEST_GOAL_LIST, "w") as outfile:
            json.dump(goals_json, outfile, sort_keys=True, indent=4)

    return render(request, "bingosync/beta_bingo.html")

def beta_stats(request):
    return render(request, "bingosync/beta_stats.html")

def beta_bingo_list(request):
    goal_list = json.load(open(LATEST_GOAL_LIST))
    return JsonResponse(goal_list, safe=False)

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


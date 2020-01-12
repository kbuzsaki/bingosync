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
import logging

from bingosync.settings import SOCKETS_URL, SOCKETS_PUBLISH_URL, IS_PROD
from bingosync.generators import InvalidBoardException
from bingosync.forms import RoomForm, JoinRoomForm, GoalListConverterForm
from bingosync.models.colors import Color
from bingosync.models.game_type import GameType, ALL_VARIANTS
from bingosync.models.events import Event, ChatEvent, RevealedEvent, ConnectionEvent, NewCardEvent
from bingosync.models.rooms import Room, Game, LockoutMode, Player
from bingosync.publish import publish_goal_event, publish_chat_event, publish_color_event, publish_revealed_event
from bingosync.publish import publish_connection_event, publish_new_card_event
from bingosync.util import generate_encoded_uuid

from crispy_forms.layout import Layout, Field

logger = logging.getLogger(__name__)

def rooms(request):
    if request.method == "POST":
        form = RoomForm(request.POST)
        if form.is_valid():
            room = form.create_room()
            creator = room.creator
            _save_session_player(request.session, creator)
            return redirect("room_view", encoded_room_uuid=room.encoded_uuid)
        else:
            logger.warning("RoomForm errors: %r, custom_json was: %r", form.errors,
                    form.data.get("custom_json", "")[:2000])
    else:
        form = RoomForm()

    rooms = Room.get_listed_rooms()
    any_idle_rooms = any(room.is_idle for room in rooms)
    all_idle_rooms = all(room.is_idle for room in rooms)
    params = {
        "form": form,
        "rooms": rooms,
        "variants": ALL_VARIANTS,
        "hide_idle_rooms": any_idle_rooms and not all_idle_rooms,
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
            room = Room.get_for_encoded_uuid_or_404(encoded_room_uuid)
            return _join_room(request, join_form, room)
    else:
        try:
            room = Room.get_for_encoded_uuid_or_404(encoded_room_uuid)
            initial_values = {
                "game_type": room.current_game.game_type.group.value,
                "variant_type": room.current_game.game_type.value,
                "lockout_mode": room.current_game.lockout_mode.value,
                "hide_card": room.hide_card,
            }
            new_card_form = RoomForm(initial=initial_values)
            new_card_form.helper.layout = Layout(
                    "game_type",
                    "variant_type",
                    "custom_json",
                    "lockout_mode",
                    "seed",
                    "hide_card",
            )
            new_card_form.helper['variant_type'].wrap(Field, wrapper_class='hidden')
            new_card_form.helper['custom_json'].wrap(Field, wrapper_class='hidden')
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
    room = Room.get_for_encoded_uuid_or_404(encoded_room_uuid)
    board = room.current_game.board
    return JsonResponse(board, safe=False)

# AJAX view to render the room settings panel
def room_settings(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    panel = loader.get_template("bingosync/room_settings_panel.html").render({"game": room.current_game, "room": room}, request)
    return JsonResponse({"panel": panel, "settings": room.settings});

@csrf_exempt
def new_card(request):
    data = json.loads(request.body.decode("utf8"))

    room = Room.get_for_encoded_uuid(data["room"])
    player = _get_session_player(request.session, room)

    lockout_mode = LockoutMode.for_value(int(data["lockout_mode"]))
    hide_card = data["hide_card"]
    seed = data["seed"]
    custom_json = data.get("custom_json", "")

    #create new game
    game_type = GameType.for_value(int(data["game_type"]))
    try:
        # variant_type is not sent if the game only has 1 variant, so use it if
        # it's present but fall back to the regular game_type otherwise
        if "variant_type" in data:
            game_type = GameType.for_value(int(data["variant_type"]))
    except ValueError:
        pass

    generator = game_type.generator_instance()

    try:
        custom_board = generator.validate_custom_json(custom_json)
    except InvalidBoardException as e:
        return HttpResponseBadRequest("Invalid board: " + str(e))

    if not seed:
        seed = str(random.randint(1, 1000000)) if game_type.uses_seed else "0"

    board_json = game_type.generator_instance().get_card(seed, custom_board)

    with transaction.atomic():
        game = Game.from_board(board_json, room=room, game_type_value=game_type.value, lockout_mode_value=lockout_mode.value, seed=seed)

        if hide_card != room.hide_card:
            room.hide_card = hide_card
        room.update_active() # This saves the room

        new_card_event = NewCardEvent(player=player, player_color_value=player.color.value,
                game_type_value=game_type.value, seed=seed, hide_card=hide_card)
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
    room = Room.get_for_encoded_uuid_or_404(encoded_room_uuid)
    # lookup the player to force authentication
    _get_session_player(request.session, room)
    events_to_return = []
    all_included = True

    if request.GET.get('full') == 'true':
        events_to_return = Event.get_all_for_room(room)
    else:
        recent_events = Event.get_all_recent_for_room(room)
        events_to_return = recent_events["events"]
        all_included = recent_events["all_included"]

    all_jsons = [event.to_json() for event in events_to_return]
    return JsonResponse({'events': all_jsons, 'allIncluded': all_included}, safe=False)

def room_disconnect(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid_or_404(encoded_room_uuid)
    _clear_session_player(request.session, room)
    return redirect("rooms")

@csrf_exempt
def goal_selected(request):
    data = parse_body_json_or_400(request, required_keys=["room", "slot", "color", "remove_color"])

    room = Room.get_for_encoded_uuid_or_404(data["room"])
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
    data = parse_body_json_or_400(request, required_keys=["room", "text"])

    room = Room.get_for_encoded_uuid_or_404(data["room"])
    player = _get_session_player(request.session, room)
    text = data["text"]

    chat_event = ChatEvent(player=player, player_color_value=player.color.value, body=text)
    chat_event.save()
    publish_chat_event(chat_event)
    return HttpResponse("Recieved data: " + str(data))

@csrf_exempt
def select_color(request):
    data = parse_body_json_or_400(request, required_keys=["room", "color"])

    room = Room.get_for_encoded_uuid_or_404(data["room"])
    player = _get_session_player(request.session, room)
    color = Color.for_name(data["color"])

    color_event = player.update_color(color)
    publish_color_event(color_event)
    return HttpResponse("Received data: ", str(data))

@csrf_exempt
def board_revealed(request):
    data = parse_body_json_or_400(request, required_keys=["room"])

    room = Room.get_for_encoded_uuid_or_404(data["room"])
    player = _get_session_player(request.session, room)

    revealed_event = RevealedEvent(player=player, player_color_value=player.color.value)
    revealed_event.save()
    publish_revealed_event(revealed_event)
    return HttpResponse("Received data: " + str(data))

@csrf_exempt
def join_room_api(request):
    # grab data from input json
    try:
        raw_data = parse_body_json_or_400(request, required_keys=["room", "nickname", "password"])
    except InvalidRequestJsonError as e:
        return JsonResponse({"error": str(e)})

    room = Room.get_for_encoded_uuid_or_404(raw_data["room"])

    # use a JoinRoomForm to share validation with the regular path
    form_data = JoinRoomForm.for_room(room).initial
    form_data.update({
        "player_name": raw_data["nickname"],
        "passphrase": raw_data["password"],
        "is_spectator": raw_data.get("is_specator", False),
    })
    join_form = JoinRoomForm(form_data)
    if join_form.is_valid():
        player = join_form.create_player()
        _save_session_player(request.session, player)
        return redirect("get_socket_key", encoded_room_uuid=room.encoded_uuid)
    else:
        return HttpResponse(join_form.errors.as_json(), content_type="application/json", status=400)

def get_socket_key(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid_or_404(encoded_room_uuid)
    player = _get_session_player(request.session, room)
    data = {
        "socket_key": _create_temporary_socket_key(player),
    }
    return JsonResponse(data)


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


def jstests(request):
    return render(request, "bingosync/tests/jstest.html", {})


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
    try:
        del authorized_rooms[room.encoded_uuid]
    except KeyError:
        logger.warn("Attempted to double-disconnect from room: %r", room)
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


# Helpers for parsing request input

class InvalidRequestJsonError(Exception):
    pass

def parse_body_json_or_400(request, *, required_keys=[]):
    try:
        data = json.loads(request.body.decode("utf8"))
    except json.JSONDecodeError:
        raise InvalidRequestJsonError("Request body was not valid JSON.")

    for key in required_keys:
        if key not in data:
            raise InvalidRequestJsonError("Request body \"" + str(data) + "\" missing key: '" + str(key) + "'")

    return data


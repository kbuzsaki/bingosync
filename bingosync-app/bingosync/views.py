from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

import json

from .settings import SOCKETS_URL
from .bingo_generator import BingoGenerator
from .forms import RoomForm, JoinRoomForm
from .models import Room, Game, Player, Color, Event, ChatEvent, ConnectionEvent
from .publish import publish_goal_event, publish_chat_event, publish_color_event, publish_connection_event

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
                "sockets_url": SOCKETS_URL
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

def room_feed(request, encoded_room_uuid):
    room = Room.get_for_encoded_uuid(encoded_room_uuid)
    all_events = Event.get_all_for_room(room)
    all_jsons = [event.to_json() for event in all_events]
    return JsonResponse(all_jsons, safe=False)

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
    connection_event = ConnectionEvent.make_connected_event(player)
    connection_event.save()

    publish_connection_event(connection_event)
    return HttpResponse()

# TODO: add authentication to limit this route to tornado
@csrf_exempt
def user_disconnected(request, encoded_player_uuid):
    player = Player.get_for_encoded_uuid(encoded_player_uuid)
    connection_event = ConnectionEvent.make_disconnected_event(player)
    connection_event.save()

    publish_connection_event(connection_event)
    return HttpResponse()

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

def _save_session_player(session, player):
    # have to set the session this way so that it saves properly
    authorized_rooms = session.get(AUTHORIZED_ROOMS, {})
    authorized_rooms[player.room.encoded_uuid] = player.encoded_uuid
    session[AUTHORIZED_ROOMS] = authorized_rooms



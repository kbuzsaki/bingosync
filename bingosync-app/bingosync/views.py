from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

import json

from .settings import SOCKETS_URL
from .bingo_generator import BingoGenerator
from .forms import RoomForm, JoinRoomForm
from .models import Room, Game, Player, Color
from .publish import publish_goal_event

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

    return render(request, "bingosync/index.html", {"form": form})

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



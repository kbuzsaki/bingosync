from django import forms
from django.db import transaction

from .models import Room, Game, Player
from .bingo_generator import BingoGenerator


ROOM_NAME_MAX_LENGTH = Room._meta.get_field("name").max_length
PLAYER_NAME_MAX_LENGTH = Player._meta.get_field("name").max_length

class RoomForm(forms.Form):
    room_name = forms.CharField(label="Room Name", max_length=ROOM_NAME_MAX_LENGTH)
    password = forms.CharField(label="Passphrase", widget=forms.PasswordInput())
    nickname = forms.CharField(label="Nickname", max_length=PLAYER_NAME_MAX_LENGTH)
    seed = forms.CharField(label="Seed", widget=forms.NumberInput())

    def create_room(self):
        room_name = self.cleaned_data["room_name"]
        password = self.cleaned_data["password"]
        nickname = self.cleaned_data["nickname"]
        seed = self.cleaned_data["seed"]
        with transaction.atomic():
            board_json = BingoGenerator.instance().get_card(seed)
            room = Room(name=room_name)
            room.save()
            game = Game.from_board(board_json, room=room, seed=seed)
        return room


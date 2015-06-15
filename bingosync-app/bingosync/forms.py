from django import forms
from django.db import transaction

from .models import Room, Game
from .bingo_generator import BingoGenerator

class RoomForm(forms.Form):
    room_name = forms.CharField(label="Room Name", max_length=255)
    password = forms.CharField(label="Passphrase", widget=forms.PasswordInput())
    nickname = forms.CharField(label="Nickname", max_length=50)
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


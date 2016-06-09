from django import forms
from django.db import transaction
from django.contrib.auth import hashers

import logging
import random

from .models import Room, GameType, LockoutMode, Game, Player, FilteredPattern

from .goals_converter import download_and_get_converted_goal_list, DEFAULT_DOWNLOAD_URL


logger = logging.getLogger(__name__)

def make_read_only_char_field(*args, **kwargs):
    kwargs["widget"] = forms.TextInput(attrs={"readonly": "readonly"})
    return forms.CharField(*args, **kwargs)

ROOM_NAME_MAX_LENGTH = Room._meta.get_field("name").max_length
PLAYER_NAME_MAX_LENGTH = Player._meta.get_field("name").max_length

class RoomForm(forms.Form):
    room_name = forms.CharField(label="Room Name", max_length=ROOM_NAME_MAX_LENGTH)
    passphrase = forms.CharField(label="Password", widget=forms.PasswordInput())
    nickname = forms.CharField(label="Nickname", max_length=PLAYER_NAME_MAX_LENGTH)
    game_type = forms.ChoiceField(label="Game", choices=GameType.form_choices())
    lockout_mode = forms.ChoiceField(label="Mode", choices=LockoutMode.choices())
    seed = forms.CharField(label="Seed", widget=forms.NumberInput(), help_text="Leave blank for a random seed", required=False)
    is_spectator = forms.BooleanField(label="Create as Spectator", required=False)
    hide_card = forms.BooleanField(label="Hide Card Initially", required=False)

    def create_room(self):
        room_name = self.cleaned_data["room_name"]
        passphrase = self.cleaned_data["passphrase"]
        nickname = self.cleaned_data["nickname"]
        game_type = GameType.for_value(int(self.cleaned_data["game_type"]))
        lockout_mode = LockoutMode.for_value(int(self.cleaned_data["lockout_mode"]))
        seed = self.cleaned_data["seed"]
        is_spectator = self.cleaned_data["is_spectator"]
        hide_card = self.cleaned_data["hide_card"]

        # apply filtered word blacklist
        room_name = FilteredPattern.filter_string(room_name)
        nickname = FilteredPattern.filter_string(nickname)

        if seed == None or seed == "":
            seed = str(random.randint(1, 1000000))

        encrypted_passphrase = hashers.make_password(passphrase)
        with transaction.atomic():
            room = Room(name=room_name, passphrase=encrypted_passphrase, hide_card=hide_card)
            room.save()

            board_json = game_type.generator_instance().get_card(seed)
            game = Game.from_board(board_json, room=room, game_type_value=game_type.value, lockout_mode_value=lockout_mode.value, seed=seed)

            creator = Player(room=room, name=nickname, is_spectator=is_spectator)
            creator.save()

            room.update_active()
        return room

class JoinRoomForm(forms.Form):
    encoded_room_uuid = forms.CharField(label="Room UUID", max_length=128, widget=forms.HiddenInput())
    room_name = make_read_only_char_field(label="Room Name", max_length=ROOM_NAME_MAX_LENGTH)
    creator_name = make_read_only_char_field(label="Creator", max_length=PLAYER_NAME_MAX_LENGTH)
    game_name = make_read_only_char_field(label="Game")
    player_name = forms.CharField(label="Nickname", max_length=PLAYER_NAME_MAX_LENGTH)
    passphrase = forms.CharField(label="Password", widget=forms.PasswordInput())
    is_spectator = forms.BooleanField(label="Join as Spectator", required=False)

    @staticmethod
    def for_room(room):
        initial_values = {
            "encoded_room_uuid": room.encoded_uuid,
            "room_name": room.name,
            "creator_name": room.creator.name,
            "game_name": str(room.current_game.game_type)
        }
        return JoinRoomForm(initial=initial_values)

    def get_room(self):
        encoded_room_uuid = self.cleaned_data["encoded_room_uuid"]
        return Room.get_for_encoded_uuid(encoded_room_uuid)

    def clean(self):
        cleaned_data = super(JoinRoomForm, self).clean()
        encoded_room_uuid = cleaned_data.get("encoded_room_uuid")
        passphrase = cleaned_data.get("passphrase")

        if encoded_room_uuid and passphrase:
            room = Room.get_for_encoded_uuid(encoded_room_uuid)
            if not hashers.check_password(passphrase, room.passphrase):
                raise forms.ValidationError("Incorrect Passphrase")

    def create_player(self):
        room = Room.get_for_encoded_uuid(self.cleaned_data["encoded_room_uuid"])
        nickname = self.cleaned_data["player_name"]
        is_spectator = self.cleaned_data["is_spectator"]

        with transaction.atomic():
            player = Player(room=room, name=nickname, is_spectator=is_spectator)
            player.save()

            room.update_active()

            return player


class GoalListConverterForm(forms.Form):
    spreadsheet_url = forms.CharField(label="Spreadsheet URL")

    @staticmethod
    def get():
        initial_values = {
            "spreadsheet_url": DEFAULT_DOWNLOAD_URL,
        }
        return GoalListConverterForm(initial=initial_values)

    def clean(self):
        cleaned_data = super(GoalListConverterForm, self).clean()
        spreadsheet_url = cleaned_data["spreadsheet_url"]

        try:
            json_str = download_and_get_converted_goal_list(spreadsheet_url)
            # make the json actually javascript
            json_str = "var bingoList = " + json_str
            self.json_str = json_str
        except Exception as e:
            logger.error("failed to download url: " + str(spreadsheet_url), exc_info=True)
            raise forms.ValidationError("Unable to get goal list")

    def get_goal_list(self):
        return self.json_str


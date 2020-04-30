from django import forms
from django.db import transaction
from django.contrib.auth import hashers

import json
import logging
import random
from uuid import uuid4

from bingosync.generators import InvalidBoardException
from bingosync.models import Room, GameType, LockoutMode, Game, Player, FilteredPattern
from bingosync.goals_converter import download_and_get_converted_goal_list, DEFAULT_DOWNLOAD_URL
from bingosync.widgets import GroupedSelect

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Field


logger = logging.getLogger(__name__)

def make_read_only_char_field(*args, **kwargs):
    kwargs["widget"] = forms.TextInput(attrs={"readonly": "readonly"})
    return forms.CharField(*args, **kwargs)

ROOM_NAME_MAX_LENGTH = Room._meta.get_field("name").max_length
PLAYER_NAME_MAX_LENGTH = Player._meta.get_field("name").max_length

CUSTOM_JSON_PLACEHOLDER_TEXT = """Paste the board as a JSON list of goals, e.g:
[ {"name": "Collect 3 Fire Flowers"},
  {"name": "Defeat Phantom Ganon"},
  {"name": "Catch a Pokemon while Surfing"},
  ... ]"""

class RoomForm(forms.Form):
    room_name = forms.CharField(label="Room Name", max_length=ROOM_NAME_MAX_LENGTH)
    passphrase = forms.CharField(label="Password", widget=forms.PasswordInput())
    nickname = forms.CharField(label="Nickname", max_length=PLAYER_NAME_MAX_LENGTH)
    game_type = forms.ChoiceField(label="Game", choices=GameType.game_choices())
    variant_type = forms.ChoiceField(label="Variant", choices=GameType.variant_choices(), widget=GroupedSelect,
                           help_text="No other variants available", required=False)
    custom_json = forms.CharField(label="Board", widget=forms.Textarea(attrs={'rows': 6, 'placeholder': CUSTOM_JSON_PLACEHOLDER_TEXT}), required=False)
    lockout_mode = forms.ChoiceField(label="Mode", choices=LockoutMode.choices())
    seed = forms.CharField(label="Seed", widget=forms.NumberInput(attrs={"min": 0, "max": 2147483647}),
                           help_text="Leave blank for a random seed", required=False)
    is_spectator = forms.BooleanField(label="Create as Spectator", required=False)
    hide_card = forms.BooleanField(label="Hide Card Initially", required=False)

    def __init__(self, *args, **kwargs):
        super(RoomForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper(self)
        self.helper.form_tag = False

        self.helper.form_class = 'form-horizontal'
        self.helper.label_class = 'col-md-3'
        self.helper.field_class = 'col-md-9'
        # variant and custom_json hidden by default
        self.helper['variant_type'].wrap(Field, wrapper_class='hidden')
        self.helper['custom_json'].wrap(Field, wrapper_class='hidden')

    def clean(self):
        cleaned_data = super(RoomForm, self).clean()

        try:
            # variant_type is not sent if the game only has 1 variant, so use it if
            # it's present but fall back to the regular game_type otherwise
            if "variant_type" in cleaned_data:
                cleaned_data["game_type"] = str(int(cleaned_data["variant_type"]))
        except ValueError:
            pass

        game_type = GameType.for_value(int(cleaned_data.get("game_type", "0")))
        generator = game_type.generator_instance()

        custom_json = cleaned_data.get("custom_json", "")
        try:
            cleaned_data["custom_board"] = generator.validate_custom_json(custom_json)
        except InvalidBoardException as e:
            raise forms.ValidationError(e)

    def create_room(self):
        room_name = self.cleaned_data["room_name"]
        passphrase = self.cleaned_data["passphrase"]
        nickname = self.cleaned_data["nickname"]
        game_type = GameType.for_value(int(self.cleaned_data["game_type"]))
        lockout_mode = LockoutMode.for_value(int(self.cleaned_data["lockout_mode"]))
        seed = self.cleaned_data["seed"]
        custom_board = self.cleaned_data.get("custom_board", [])
        is_spectator = self.cleaned_data["is_spectator"]
        hide_card = self.cleaned_data["hide_card"]

        # apply filtered word blacklist
        room_name = FilteredPattern.filter_string(room_name)
        nickname = FilteredPattern.filter_string(nickname)

        if not seed:
            seed = str(random.randint(1, 1000000)) if game_type.uses_seed else "0"

        board_json = game_type.generator_instance().get_card(seed, custom_board)

        encrypted_passphrase = hashers.make_password(passphrase)
        with transaction.atomic():
            room = Room(name=room_name, passphrase=encrypted_passphrase, hide_card=hide_card, public_access_key=uuid4())
            room.save()

            game = Game.from_board(board_json, room=room, game_type_value=game_type.value,
                    lockout_mode_value=lockout_mode.value, seed=seed)

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
            "game_name": room.current_game.game_type.long_name,
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
                raise forms.ValidationError("Incorrect Password")

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

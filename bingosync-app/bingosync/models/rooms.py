from django.db import models, transaction
from django.http import Http404
from django.urls import reverse
from django.utils import timezone

import datetime
from uuid import uuid4
from enum import Enum, unique

from bingosync.models.game_type import GameType
from bingosync.models.colors import Color, CompositeColor
from bingosync.models.events import Event, GoalEvent, ColorEvent, RevealedEvent, ConnectionEventType, ConnectionEvent
from bingosync.util import encode_uuid, decode_uuid


STALE_THRESHOLD = datetime.timedelta(minutes=90)

class Room(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    created_date = models.DateTimeField("Creation Time", default=timezone.now)
    passphrase = models.CharField(max_length=255)
    active = models.BooleanField("Active", default=False)
    hide_card = models.BooleanField("Initially Hide Card", default=False)

    def __str__(self):
        return self.name

    def __repr__(self):
        return "<Room: id: {!r}, uuid: {!r}>".format(self.id, self.encoded_uuid)

    def get_absolute_url(self):
        from bingosync.views import room_view
        kwargs = {
            "encoded_room_uuid": self.encoded_uuid
        }
        return reverse(room_view, kwargs=kwargs)

    @staticmethod
    def get_for_encoded_uuid(encoded_room_uuid):
        try:
            decoded_uuid = decode_uuid(encoded_room_uuid)
        except ValueError:
            raise Room.DoesNotExist("Malformed encoded uuid: '" + str(encoded_room_uuid) + "'")
        return Room.objects.get(uuid=decoded_uuid)

    @staticmethod
    def get_for_encoded_uuid_or_404(encoded_room_uuid):
        try:
            return Room.get_for_encoded_uuid(encoded_room_uuid)
        except Room.DoesNotExist:
            raise Http404

    @staticmethod
    def get_listed_rooms():
        active_rooms = Room.objects.filter(active=True)
        # use -len(players) so that high numbers of players are at the top
        # but otherwise names are sorted lexicographically descending
        key = lambda room: (room.is_idle, -len(room.connected_players), room.name)
        return sorted(active_rooms, key=key)

    @staticmethod
    def get_with_multiple_players():
        return Room.objects.annotate(num_players=models.Count('player')).filter(num_players__gt=1)

    @staticmethod
    def get_by_game_type(gid):
        rooms = Room.objects.filter(uuid__in=Game.objects.filter(game_type_value=gid).values('room__uuid'))

        return rooms

    @staticmethod
    def get_by_game_type_with_multiple_players(gid):
        return Room.get_by_game_type(gid).annotate(num_players=models.Count('player')).filter(num_players__gt=1)

    @property
    def encoded_uuid(self):
        return encode_uuid(self.uuid)

    @property
    def current_game(self):
        return Game.objects.filter(room=self).order_by("-created_date").first()

    @property
    def games(self):
        return Game.objects.filter(room=self)

    @property
    def players(self):
        return Player.objects.filter(room=self).order_by("name")

    @property
    def connected_players(self):
        return [player for player in self.players if player.connected]

    @property
    def latest_event_timestamp(self):
        latest_event = Event.get_latest_for_room(self)
        return latest_event.timestamp if latest_event else self.created_date

    @property
    def is_idle(self):
        idle_time = datetime.datetime.now(datetime.timezone.utc) - self.latest_event_timestamp
        return idle_time > STALE_THRESHOLD

    @property
    def is_seed_hidden(self):
        if not self.hide_card:
            return False
        latest_game_start = self.current_game.created_date
        latest_revealed_event = RevealedEvent.objects.filter(player__room=self).order_by("timestamp").last()
        return not latest_revealed_event or latest_game_start >= latest_revealed_event.timestamp

    def update_active(self):
        self.active = len(self.connected_players) > 0
        self.save()

    @property
    def creator(self):
        return self.players.order_by("created_date").first()

    @property
    def settings(self):
        game = self.current_game
        return {
            "hide_card": self.hide_card,
            "lockout_mode": str(game.lockout_mode),
            "game": str(game.game_type.group),
            "game_id": game.game_type.group.value,
            "variant": str(game.game_type),
            "variant_id": game.game_type_value,
            "seed": game.seed,
        }

class LockoutMode(Enum):
    non_lockout = 1
    lockout = 2

    def __str__(self):
        return LOCKOUT_MODE_NAMES[self]

    @staticmethod
    def for_value(value):
        return list(LockoutMode)[value - 1]

    @staticmethod
    def default_value():
        return LockoutMode.non_lockout.value

    @staticmethod
    def choices():
        return [(lockout_mode.value, str(lockout_mode)) for lockout_mode in LockoutMode]

LOCKOUT_MODE_NAMES = {
    LockoutMode.non_lockout: "Non-Lockout",
    LockoutMode.lockout: "Lockout",
}

class Game(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    seed = models.IntegerField()
    created_date = models.DateTimeField("Creation Time", default=timezone.now)
    game_type_value = models.IntegerField("Game Type", choices=GameType.choices())
    lockout_mode_value = models.IntegerField("Lockout Mode", choices=LockoutMode.choices(), default=LockoutMode.default_value())

    def __str__(self):
        return self.room.name + ": " + str(self.seed)

    @staticmethod
    def from_board(board_json, *args, **kwargs):
        with transaction.atomic():
            game = Game(*args, **kwargs)
            game.full_clean()
            game.save()
            for index, square_json in enumerate(board_json):
                slot = index + 1
                square = Square(game=game, slot=slot, goal=square_json["name"])
                square.full_clean()
                square.save()
        return game

    @property
    def game_type(self):
        return GameType.for_value(self.game_type_value)

    @property
    def lockout_mode(self):
        return LockoutMode.for_value(self.lockout_mode_value)

    @property
    def squares(self):
        return Square.objects.filter(game=self).order_by("slot")

    @property
    def board(self):
        return [square.to_json() for square in self.squares]

    def update_goal(self, player, slot, color, remove_color):
        square = self.squares[slot - 1]
        square_color = square.color

        # if we're in a lockout mode, verify that the color change is valid
        if self.lockout_mode == LockoutMode.lockout:
            # if we're trying to set a color and the square isn't blank, fail
            if not remove_color and square_color.colors != [Color.blank]:
                return False
            # if we're trying to clear a color and it's not our color, fail
            if remove_color and square_color.colors != [color]:
                return False


        if remove_color:
            square_color.remove(color)
        else:
            square_color.add(color)
        square.color = square_color
        square.save()

        goal_event = GoalEvent(player=player, square=square, color_value=color.value,
                               player_color_value=player.color.value, remove_color=remove_color)
        goal_event.save()
        return goal_event


SLOT_RANGE = range(1, 26)
SLOT_CHOICES = [(num, str(num)) for num in SLOT_RANGE]

def validate_in_slot_range(slot):
    return slot in SLOT_RANGE

class Square(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    slot = models.IntegerField(choices=SLOT_CHOICES, validators=[validate_in_slot_range])
    goal = models.CharField(max_length=255)
    color_value = models.IntegerField("Color", default=CompositeColor.goal_default().value, choices=CompositeColor.goal_choices())

    @property
    def color(self):
        return CompositeColor.for_value(self.color_value)

    @color.setter
    def color(self, color):
        self.color_value = color.value

    @property
    def slot_name(self):
        return "slot" + str(self.slot)

    def to_json(self):
        return {
            "name": self.goal,
            "slot": self.slot_name,
            "colors": self.color.name
        }

    class Meta:
        unique_together = (("game", "slot"),)

class Player(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=50)
    color_value = models.IntegerField("Color", default=Color.player_default().value, choices=Color.player_choices())
    created_date = models.DateTimeField("Creation Time", default=timezone.now)
    is_spectator = models.BooleanField("Is Spectator", default=False)

    @staticmethod
    def get_for_encoded_uuid(encoded_player_uuid):
        decoded_uuid = decode_uuid(encoded_player_uuid)
        return Player.objects.get(uuid=decoded_uuid)

    def __str__(self):
        return self.name

    def __repr__(self):
        return "<Player: id: {!r}, uuid: {!r}, name: {!r}>".format(self.id, self.encoded_uuid, self.name)

    @property
    def encoded_uuid(self):
        return encode_uuid(self.uuid)

    @property
    def color(self):
        if self.is_spectator:
            return Color.blank
        return Color.for_value(self.color_value)

    @property
    def connected(self):
        last_connection_event = ConnectionEvent.objects.filter(player=self).order_by("timestamp").last()
        return not last_connection_event or last_connection_event.event_type == ConnectionEventType.connected

    def update_color(self, color):
        with transaction.atomic():
            color_event = ColorEvent(player=self, player_color_value=self.color.value, color_value=color.value)
            color_event.save()
            self.color_value = color.value
            self.save()
        return color_event

    def to_json(self):
        return {
            "uuid": self.encoded_uuid,
            "name": self.name,
            "color": self.color.name,
            "is_spectator": self.is_spectator
        }

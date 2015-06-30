from django.db import models, transaction
from django.core import urlresolvers

from datetime import datetime
from uuid import uuid4
from enum import Enum, unique

from .util import encode_uuid, decode_uuid

@unique
class Color(Enum):
    blank = 1
    red = 2
    blue = 3
    green = 4
    orange = 5
    purple = 6

    def __str__(self):
        return self.name.capitalize()

    @staticmethod
    def for_value(value):
        return list(Color)[value - 1]

    @staticmethod
    def goal_choices():
        return [(color.value, str(color)) for color in Color]

    @staticmethod
    def goal_default():
        return Color.blank

    @staticmethod
    def player_choices():
        return [(color.value, str(color)) for color in Color if color is not Color.blank]

    @staticmethod
    def player_default():
        return Color.red

    @property
    def goal_class(self):
        return self.name + "square"

    @property
    def player_class(self):
        return self.name + "player"

class Room(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    created_date = models.DateTimeField("Creation Time", default=datetime.now)
    passphrase = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        from .views import room_view
        kwargs = {
            "encoded_room_uuid": self.encoded_uuid
        }
        return urlresolvers.reverse(room_view, kwargs=kwargs)

    @staticmethod
    def get_for_encoded_uuid(encoded_room_uuid):
        decoded_uuid = decode_uuid(encoded_room_uuid)
        return Room.objects.get(uuid=decoded_uuid)

    @property
    def encoded_uuid(self):
        return encode_uuid(self.uuid)

    @property
    def current_game(self):
        return self.games[0]

    @property
    def games(self):
        return Game.objects.filter(room=self)

    @property
    def players(self):
        return Player.objects.filter(room=self)

    @property
    def creator(self):
        return self.players.order_by("created_date").first()

class Game(models.Model):
    room = models.ForeignKey(Room)
    seed = models.IntegerField()
    created_date = models.DateTimeField("Creation Time", default=datetime.now)

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
    def squares(self):
        return Square.objects.filter(game=self).order_by("slot")

    @property
    def board(self):
        return [square.to_json() for square in self.squares]

SLOT_RANGE = range(1, 26)
SLOT_CHOICES = [(num, str(num)) for num in SLOT_RANGE]

def validate_in_slot_range(slot):
    return slot in SLOT_RANGE

class Square(models.Model):
    game = models.ForeignKey(Game)
    slot = models.IntegerField(choices=SLOT_CHOICES, validators=[validate_in_slot_range])
    goal = models.CharField(max_length=255)
    color_value = models.IntegerField("Color", default=Color.goal_default().value, choices=Color.goal_choices())

    @property
    def color(self):
        return Color.for_value(self.color_value)

    def to_json(self):
        return {
            "name": self.goal,
            "color": self.color.goal_class
        }

    class Meta:
        unique_together = (("game", "slot"),)

class Player(models.Model):
    room = models.ForeignKey(Room)
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=50)
    color_value = models.IntegerField("Color", default=Color.player_default().value, choices=Color.player_choices())
    created_date = models.DateTimeField("Creation Time", default=datetime.now)

    @staticmethod
    def get_for_encoded_uuid(encoded_player_uuid):
        decoded_uuid = decode_uuid(encoded_player_uuid)
        return Player.objects.get(uuid=decoded_uuid)

    @property
    def encoded_uuid(self):
        return encode_uuid(self.uuid)

    @property
    def color(self):
        return Color.for_value(self.color_value)

class Event(models.Model):
    player = models.ForeignKey(Player)
    timestamp = models.DateTimeField("Sent")

    class Meta:
        abstract = True

class ChatEvent(Event):
    body = models.TextField()

class GoalEvent(Event):
    square = models.ForeignKey(Square)
    color_value = models.IntegerField(choices=Color.goal_choices())

    @property
    def color(self):
        return Color.for_value(self.color_value)

@unique
class ConnectionEventType(Enum):
    connected = 1
    disconnected = 2

    def __str__(self):
        return self.name.capitalize()

    @staticmethod
    def choices():
        return [(event.value, str(event)) for event in ConnectionEventType]

class ConnectionEvent(Event):
    event = models.IntegerField(choices=ConnectionEventType.choices())


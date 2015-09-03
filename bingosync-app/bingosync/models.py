from django.db import models, transaction
from django.core import urlresolvers

from datetime import datetime
from uuid import uuid4
from enum import Enum, unique

from .bingo_generator import BingoGenerator
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
    def for_name(name):
        # hacky way to get the color
        return [color for color in Color if color.name == name][0]

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

    @staticmethod
    def get_listed_rooms():
        return [room for room in Room.objects.all() if room.active]

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
        return Player.objects.filter(room=self).order_by("name")

    @property
    def connected_players(self):
        return [player for player in self.players if player.connected]

    @property
    def active(self):
        return len(self.connected_players) > 0

    @property
    def creator(self):
        return self.players.order_by("created_date").first()

@unique
class GameType(Enum):
    ocarina_of_time = 1
    super_mario_64 = 2
    majoras_mask = 3
    super_metroid = 4
    castlevania_sotn = 5
    super_mario_world = 6
    pokemon_red_blue = 7
    pokemon_crystal = 8
    donkey_kong_64 = 9

    def __str__(self):
        return GAME_TYPE_NAMES[self]

    @staticmethod
    def for_value(value):
        return list(GameType)[value - 1]

    def generator_instance(self):
        return BingoGenerator.instance(self.name)

    @staticmethod
    def choices():
        return [(game_type.value, str(game_type)) for game_type in GameType]

GAME_TYPE_NAMES = {
    GameType.ocarina_of_time: "Zelda: OoT",
    GameType.super_mario_64: "SM64",
    GameType.majoras_mask: "Zelda: MM",
    GameType.super_metroid: "Super Metroid",
    GameType.castlevania_sotn: "CV: SotN",
    GameType.super_mario_world: "SMW",
    GameType.pokemon_red_blue: "Poké Red/Blue",
    GameType.pokemon_crystal: "Poké Crystal",
    GameType.donkey_kong_64: "DK64",
}


class Game(models.Model):
    room = models.ForeignKey(Room)
    seed = models.IntegerField()
    created_date = models.DateTimeField("Creation Time", default=datetime.now)
    game_type_value = models.IntegerField("Game Type", choices=GameType.choices())

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
    def squares(self):
        return Square.objects.filter(game=self).order_by("slot")

    @property
    def board(self):
        return [square.to_json() for square in self.squares]

    def update_goal(self, player, slot, color):
        square = self.squares[slot - 1]
        square.color = color
        square.save()

        goal_event = GoalEvent(player=player, square=square, color_value=color.value,
                               player_color_value=player.color.value)
        goal_event.save()
        return goal_event


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
            "color": self.color.name
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

    def __str__(self):
        return self.name

    @property
    def encoded_uuid(self):
        return encode_uuid(self.uuid)

    @property
    def color(self):
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
            "color": self.color.name
        }

class Event(models.Model):
    player = models.ForeignKey(Player)
    timestamp = models.DateTimeField("Sent", default=datetime.now)
    player_color_value = models.IntegerField(choices=Color.player_choices())

    @property
    def player_color(self):
        return Color.for_value(self.player_color_value)

    @staticmethod
    def get_all_for_room(room):
        chat_events = list(ChatEvent.objects.filter(player__room=room))
        goal_events = list(GoalEvent.objects.filter(player__room=room))
        color_events = list(ColorEvent.objects.filter(player__room=room))
        connection_events = list(ConnectionEvent.objects.filter(player__room=room))
        all_events = chat_events + goal_events + color_events + connection_events
        all_events.sort(key=lambda event: event.timestamp)
        return all_events

    class Meta:
        abstract = True


class ChatEvent(Event):
    body = models.TextField()

    def to_json(self):
        return {
            "type": "chat",
            "player": self.player.to_json(),
            "player_color": self.player_color.name,
            "text": self.body
        }

class GoalEvent(Event):
    square = models.ForeignKey(Square)
    color_value = models.IntegerField(choices=Color.goal_choices())

    @property
    def color(self):
        return Color.for_value(self.color_value)

    def to_json(self):
        return {
            "type": "goal",
            "player": self.player.to_json(),
            "square": self.square.to_json(),
            "player_color": self.player_color.name,
            "color": self.color.name
        }

class ColorEvent(Event):
    color_value = models.IntegerField(choices=Color.player_choices())

    @property
    def color(self):
        return Color.for_value(self.color_value)

    def to_json(self):
        return {
            "type": "color",
            "player": self.player.to_json(),
            "player_color": self.player_color.name,
            "color": self.color.name
        }

@unique
class ConnectionEventType(Enum):
    connected = 1
    disconnected = 2

    def __str__(self):
        return self.name.capitalize()

    @staticmethod
    def for_value(value):
        return list(ConnectionEventType)[value - 1]

    @staticmethod
    def choices():
        return [(event.value, str(event)) for event in ConnectionEventType]

class ConnectionEvent(Event):
    event = models.IntegerField(choices=ConnectionEventType.choices())

    @property
    def event_type(self):
        return ConnectionEventType.for_value(self.event)

    @staticmethod
    def make_connected_event(player):
        return ConnectionEvent(player=player, player_color_value=player.color.value,
                               event=ConnectionEventType.connected.value)

    @staticmethod
    def make_disconnected_event(player):
        return ConnectionEvent(player=player, player_color_value=player.color.value,
                               event=ConnectionEventType.disconnected.value)

    def to_json(self):
        return {
            "type": "connection",
            "event_type": self.event_type.name,
            "player": self.player.to_json(),
            "player_color": self.player_color.name
        }



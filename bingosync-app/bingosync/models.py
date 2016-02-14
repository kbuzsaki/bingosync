from django.db import models, transaction
from django.core import urlresolvers

from datetime import datetime
from uuid import uuid4
from enum import Enum, unique

from .bingo_generator import BingoGenerator
from .util import encode_uuid, decode_uuid

from itertools import combinations, chain

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
    def compositeValue(self):
        if self == Color.blank:
            return 0
        exponent = self.value - 2
        return pow(2, exponent)

    @property
    def goal_class(self):
        return self.name + "square"

    @property
    def player_class(self):
        return self.name + "player"

# CompositeColor can be any combination of Color objects (except Color.blank which is always by itself in a CompositeColor)
class CompositeColor:
    def __init__(self, colors = []):
        self.colors = colors

    def __str__(self):
        colorNames = list(map(lambda x: x.name.capitalize(), self.colors))
        colorNames.sort()
        return ' '.join(colorNames)

    @staticmethod
    def goal_choices():
        allcolors = frozenset(Color)
        allcolors = allcolors - set([Color.blank])
        allsets = set(chain.from_iterable(combinations(allcolors, n) for n in range(len(allcolors)+1)))
        allsets.remove(())
        allsets.add(frozenset([Color.blank]))
        choices = []
        for possible in allsets:
            try:
                iterator = iter(possible)
            except TypeError:
                print(str(possible) + ' is not iterable')
            else:
                cCol = CompositeColor(possible)
                choices.append( (cCol.value, str(cCol)) )
        return choices

    @staticmethod
    def goal_default():
        return CompositeColor([Color.blank])

    @staticmethod
    def for_value(value):
        colorValues = dict(map(lambda x: (x.compositeValue, x), Color))
        del colorValues[0]
        colors = set()
        while len(colorValues.keys()) > 0:
            key = max(colorValues.keys())
            color = colorValues[key]
            del colorValues[key]
            if value < key:
                continue
            colors.add(color)
            value -= key
        if colors == set() or value > 0:
            colors = set([Color.blank])
        return CompositeColor(colors)

    @property
    def name(self):
        val = str(self)
        return val.lower()

    @property
    def value(self):
        val = 0
        for color in self._colors:
            if color == Color.blank:
                return 0;
            val = val + color.compositeValue
        return val

    @property
    def colors(self):
        return list(self._colors)

    @colors.setter
    def colors(self, val):
        for color in val:
            if not isinstance(color, Color):
                raise ValueError("CompositeColor may only contain colors")
            if color == Color.blank:
                self._colors = set([Color.blank])
                return
        self._colors = set(val)
        if self._colors == set():
            self._colors = set([Color.blank])

    def remove(self, color):
        if not isinstance(color, Color):
            raise ValueError("CompositeColor may only contain colors")
        self._colors.discard(color)
        if self._colors == set():
            self._colors = set([Color.blank])

    def add(self, color):
        if not isinstance(color, Color):
            raise ValueError("CompositeColor may only contain colors")
        if self._colors == set([Color.blank]):
            self.colors = [color]
        else:
            self._colors.add(color)


class Room(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    created_date = models.DateTimeField("Creation Time", default=datetime.now)
    passphrase = models.CharField(max_length=255)
    active = models.BooleanField("Active", default=False)

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
        return Room.objects.filter(active=True)

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

    def update_active(self):
        self.active = len(self.connected_players) > 0
        self.save()

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
    pikmin = 10
    super_mario_sunshine = 11
    pokemon_red_blue_randomizer = 12

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
    GameType.pikmin: "Pikmin",
    GameType.super_mario_sunshine: "SMS",
    GameType.pokemon_red_blue_randomizer: "Poké Random",
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

    def update_goal(self, player, slot, color, removeColor):
        square = self.squares[slot - 1]
        sqColor = square.color
        if removeColor:
            sqColor.remove(color)
        else:
            sqColor.add(color)
        square.color = sqColor
        square.save()

        goal_event = GoalEvent(player=player, square=square, color_value=color.value,
                               player_color_value=player.color.value, remove_color=removeColor)
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
    room = models.ForeignKey(Room)
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=50)
    color_value = models.IntegerField("Color", default=Color.player_default().value, choices=Color.player_choices())
    created_date = models.DateTimeField("Creation Time", default=datetime.now)
    is_spectator = models.BooleanField("Is Spectator", default=False)

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
    remove_color = models.BooleanField(default=False)

    @property
    def color(self):
        return Color.for_value(self.color_value)

    def to_json(self):
        return {
            "type": "goal",
            "player": self.player.to_json(),
            "square": self.square.to_json(),
            "player_color": self.player_color.name,
            "color": self.color.name,
            "remove": self.remove_color
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
    def atomically_connect(player):
        with transaction.atomic():
            connected_event = ConnectionEvent.make_connected_event(player)
            connected_event.save()
            player.room.update_active()
            return connected_event

    @staticmethod
    def make_disconnected_event(player):
        return ConnectionEvent(player=player, player_color_value=player.color.value,
                               event=ConnectionEventType.disconnected.value)

    @staticmethod
    def atomically_disconnect(player):
        with transaction.atomic():
            disconnected_event = ConnectionEvent.make_disconnected_event(player)
            disconnected_event.save()
            player.room.update_active()
            return disconnected_event

    def to_json(self):
        return {
            "type": "connection",
            "event_type": self.event_type.name,
            "player": self.player.to_json(),
            "player_color": self.player_color.name
        }



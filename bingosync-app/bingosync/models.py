from django.db import models, transaction
from django.http import Http404
from django.urls import reverse
from django.utils import timezone

import datetime
from uuid import uuid4
from enum import Enum, unique
import re
import logging

from .game_type import GameType
from .util import encode_uuid, decode_uuid

from itertools import combinations, chain

@unique
class Color(Enum):
    blank = 1
    # 5 original colors
    red = 2
    blue = 3
    green = 4
    orange = 5
    purple = 6
    # 5 expanded colors
    navy = 7
    teal = 8
    pink = 9
    brown = 10
    yellow = 11

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
    def composite_value(self):
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
        color_names = list(map(lambda x: x.name.capitalize(), self.colors))
        color_names.sort()
        return ' '.join(color_names)

    @staticmethod
    def goal_choices():
        all_colors = frozenset(Color)
        all_colors = all_colors - set([Color.blank])
        all_sets = set(chain.from_iterable(combinations(all_colors, n) for n in range(len(all_colors)+1)))
        all_sets.remove(())
        all_sets.add(frozenset([Color.blank]))
        choices = []
        for possible in all_sets:
            try:
                iterator = iter(possible)
            except TypeError:
                print(str(possible) + ' is not iterable')
            else:
                composite_color = CompositeColor(possible)
                choices.append((composite_color.value, str(composite_color)))
        # sort so that it's not runtime dependent and messing up migrations every time
        return sorted(choices)

    @staticmethod
    def goal_default():
        return CompositeColor([Color.blank])

    @staticmethod
    def for_value(value):
        color_values = dict(map(lambda x: (x.composite_value, x), Color))
        del color_values[0]
        colors = set()
        while len(color_values.keys()) > 0:
            key = max(color_values.keys())
            color = color_values[key]
            del color_values[key]
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
            val = val + color.composite_value
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


STALE_THRESHOLD = datetime.timedelta(hours=3)

class Room(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    created_date = models.DateTimeField("Creation Time", default=timezone.now)
    passphrase = models.CharField(max_length=255)
    active = models.BooleanField("Active", default=False)
    hide_card = models.BooleanField("Initially Hide Card", default=False)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        from .views import room_view
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
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    timestamp = models.DateTimeField("Sent", default=timezone.now)
    player_color_value = models.IntegerField(choices=Color.player_choices())

    @property
    def player_color(self):
        return Color.for_value(self.player_color_value)

    @property
    def json_timestamp(self):
        return self.timestamp.replace().timestamp()

    @staticmethod
    def event_classes():
        return [ChatEvent, GoalEvent, ColorEvent, RevealedEvent, ConnectionEvent, NewCardEvent]

    @staticmethod
    def get_all_for_room(room):
        all_events = []
        for event_class in Event.event_classes():
            all_events.extend(event_class.objects.filter(player__room=room))
        return sorted(all_events, key=lambda event: event.timestamp)

    @staticmethod
    def get_all_recent_for_room(room):
        recent_events = []
        total_events = 0;
        for event_class in Event.event_classes():
            total_events += event_class.objects.filter(player__room=room).count()
            recent_events.extend(event_class.objects.filter(player__room=room).filter(timestamp__gte=datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(hours=24)))
        all_included = total_events == len(recent_events)
        recent_events = sorted(recent_events, key=lambda event: event.timestamp)
        return {'events': recent_events, 'all_included': all_included}

    @staticmethod
    def get_latest_for_room(room):
        latest_events = []
        for event_class in Event.event_classes():
            try:
                latest_event = event_class.objects.filter(player__room=room).latest()
                latest_events.append(latest_event)
            except event_class.DoesNotExist:
                pass
        if latest_events:
            return sorted(latest_events, key=lambda event: event.timestamp)[-1]
        else:
            return None

    class Meta:
        abstract = True
        get_latest_by = "timestamp"


class ChatEvent(Event):
    body = models.TextField()

    def to_json(self):
        return {
            "type": "chat",
            "player": self.player.to_json(),
            "player_color": self.player_color.name,
            "text": self.body,
            "timestamp": self.json_timestamp
        }

class NewCardEvent(Event):
    game_type_value = models.IntegerField(choices=GameType.choices())
    seed = models.IntegerField(default=0)

    @property
    def game_type(self):
        return GameType.for_value(self.game_type_value)

    @property
    def is_current(self):
        new_card_events = NewCardEvent.objects.filter(player__room=self.player.room).order_by("timestamp")
        return new_card_events.last() == self

    def to_json(self):
        return {
            "type": "new-card",
            "player": self.player.to_json(),
            "player_color": self.player_color.name,
            "game": GameType.for_value(self.game_type_value).long_name,
            "seed": self.seed,
            "is_current": self.is_current,
            "timestamp": self.json_timestamp
        }

class GoalEvent(Event):
    square = models.ForeignKey(Square, on_delete=models.CASCADE)
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
            "remove": self.remove_color,
            "timestamp": self.json_timestamp
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
            "color": self.color.name,
            "timestamp": self.json_timestamp
        }

class RevealedEvent(Event):

    def to_json(self):
        return {
            "type": "revealed",
            "player": self.player.to_json(),
            "player_color": self.player_color.name,
            "timestamp": self.json_timestamp
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
            "player_color": self.player_color.name,
            "timestamp": self.json_timestamp
        }


FILLER_WORD = "bingo"

class FilteredPattern(models.Model):
    pattern = models.CharField(max_length=255)

    @staticmethod
    def filter_string(string):
        filtered_patterns = FilteredPattern.objects.all()

        for filtered_pattern in filtered_patterns:
            try:
                filtered_regex = re.compile(filtered_pattern.pattern, re.IGNORECASE)
                string = filtered_regex.sub(FILLER_WORD, string)
            except Exception as e:
                logging.exception("Regex pattern: " + filtered_pattern.pattern)



        return string


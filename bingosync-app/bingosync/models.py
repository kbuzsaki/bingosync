from django.db import models, transaction
from django.urls import reverse
from django.utils import timezone

from uuid import uuid4
from enum import Enum, unique
import re
import logging

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
        decoded_uuid = decode_uuid(encoded_room_uuid)
        return Room.objects.get(uuid=decoded_uuid)

    @staticmethod
    def get_listed_rooms():
        active_rooms = Room.objects.filter(active=True)
        # use -len(players) so that high numbers of players are at the top
        # but otherwise names are sorted lexicographically descending
        key = lambda room: (-len(room.connected_players), room.name)
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
    final_fantasy_1 = 13
    crash_twinsanity = 14
    lufia_2 = 15
    lego_star_wars = 16
    spyro_2 = 17
    custom = 18
    pokemon_snap = 19
    ocarina_of_time_blackout = 20
    ocarina_of_time_short = 21
    ocarina_of_time_short_blackout = 22
    pokemon_ruby_sapphire = 23
    adams_family = 24
    sonic_adventure_2 = 25
    dark_souls = 26
    road_trip_adventure = 27
    psychonauts = 28
    super_mario_galaxy = 29
    banjo_tooie = 30
    ff4_ancient_cave = 31
    zelda_botw = 32
    sonic_adventure_2_hero_story = 33
    the_witness = 34
    pikmin_2 = 35
    alttp_randomizer = 36
    pokemon_platinum = 37
    rayman_ps1 = 38
    pokemon_crystal_randomizer = 39
    pokemon_emerald_randomizer = 40
    pokemon_crystal_classic_randomizer = 41
    sonic_adventure_2_dark_story = 42
    sonic_adventure_2_long = 43
    zelda_skyward_sword = 44
    super_mario_odyssey = 45
    super_mario_odyssey_long = 46
    rabi_ribi = 47
    generic_bingo = 48
    generic_bingo_deluxe = 49
    harry_potter_2 = 50
    pokemon_emerald_randomizer_prelilycove = 51

    def __str__(self):
        return GAME_TYPE_SHORT_NAMES[self]

    @property
    def long_name(self):
        return GAME_TYPE_NAMES[self]

    @staticmethod
    def for_value(value):
        return list(GameType)[value - 1]

    def generator_instance(self):
        return BingoGenerator.instance(self.name)

    @staticmethod
    def choices():
        return [(game_type.value, game_type.long_name) for game_type in GameType]

    @staticmethod
    def sorted_choices():
        return list(sorted(GameType.choices(), key=lambda el: el[1]))

    @staticmethod
    def form_choices():
        # filter out custom and then put it at the end
        choices = [choice for choice in GameType.sorted_choices() if choice[0] != GameType.custom.value]
        return [(None, '')] + choices + [(GameType.custom.value, GameType.custom.long_name)]

GAME_TYPE_NAMES = {
    GameType.ocarina_of_time: "Zelda: Ocarina of Time",
    GameType.super_mario_64: "Super Mario 64",
    GameType.majoras_mask: "Zelda: Majora's Mask",
    GameType.super_metroid: "Super Metroid",
    GameType.castlevania_sotn: "Castlevania: Symphony of the Night",
    GameType.super_mario_world: "Super Mario World",
    GameType.pokemon_red_blue: "Pokémon Red/Blue",
    GameType.pokemon_crystal: "Pokémon Crystal",
    GameType.donkey_kong_64: "Donkey Kong 64",
    GameType.pikmin: "Pikmin",
    GameType.super_mario_sunshine: "Super Mario Sunshine",
    GameType.pokemon_red_blue_randomizer: "Pokémon Red/Blue - Randomizer",
    GameType.final_fantasy_1: "Final Fantasy 1",
    GameType.crash_twinsanity: "Crash Twinsanity",
    GameType.lufia_2: "Lufia 2: Ancient Cave",
    GameType.lego_star_wars: "Lego Star Wars",
    GameType.spyro_2: "Spyro 2: Ripto's Rage",
    GameType.custom: "Custom (Advanced)",
    GameType.pokemon_snap: "Pokémon Snap",
    GameType.ocarina_of_time_blackout: "Zelda: Ocarina of Time - Blackout",
    GameType.ocarina_of_time_short: "Zelda: Ocarina of Time - Short",
    GameType.ocarina_of_time_short_blackout: "Zelda: Ocarina of Time - Short Blackout",
    GameType.pokemon_ruby_sapphire: "Pokémon Ruby/Sapphire",
    GameType.adams_family: "The Addams Family (SNES)",
    GameType.sonic_adventure_2: "Sonic Adventure 2",
    GameType.dark_souls: "Dark Souls",
    GameType.road_trip_adventure: "Road Trip Adventure",
    GameType.psychonauts: "Psychonauts",
    GameType.super_mario_galaxy: "Super Mario Galaxy",
    GameType.banjo_tooie: "Banjo-Tooie",
    GameType.ff4_ancient_cave: "Final Fantasy 4 - Ancient Cave",
    GameType.zelda_botw: "Zelda: Breath of the Wild",
    GameType.sonic_adventure_2_hero_story: "Sonic Adventure 2 - Hero Story",
    GameType.the_witness: "The Witness",
    GameType.pikmin_2: "Pikmin 2",
    GameType.alttp_randomizer: "Zelda: A Link To The Past - Randomizer",
    GameType.pokemon_platinum: "Pokémon Platinum",
    GameType.rayman_ps1: "Rayman (PS1)",
    GameType.pokemon_crystal_randomizer: "Pokémon Crystal - Current Randomizer",
    GameType.pokemon_emerald_randomizer: "Pokémon Emerald - Randomizer",
    GameType.pokemon_crystal_classic_randomizer: "Pokémon Crystal - Classic Randomizer",
    GameType.sonic_adventure_2_dark_story: "Sonic Adventure 2 - Dark Story",
    GameType.sonic_adventure_2_long: "Sonic Adventure 2 - Long",
    GameType.zelda_skyward_sword: "Zelda: Skyward Sword",
    GameType.super_mario_odyssey: "Super Mario Odyssey",
    GameType.super_mario_odyssey_long: "Super Mario Odyssey - Long",
    GameType.rabi_ribi: "Rabi-Ribi",
    GameType.generic_bingo: "Generic Bingo",
    GameType.generic_bingo_deluxe: "Generic Bingo Deluxe",
    GameType.harry_potter_2: "Harry Potter and the Chamber of Secrets",
    GameType.pokemon_emerald_randomizer_prelilycove: "Pokémon Emerald - Pre-Lilycove Randomizer",
}

GAME_TYPE_SHORT_NAMES = {
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
    GameType.pokemon_red_blue_randomizer: "Red/Blue Random",
    GameType.final_fantasy_1: "FF1",
    GameType.crash_twinsanity: "Crash Twins.",
    GameType.lufia_2: "Lufia 2",
    GameType.lego_star_wars: "Lego SW",
    GameType.spyro_2: "Spyro 2",
    GameType.custom: "Custom",
    GameType.pokemon_snap: "Poké Snap",
    GameType.ocarina_of_time_blackout: "OoT Blackout",
    GameType.ocarina_of_time_short: "OoT Short",
    GameType.ocarina_of_time_short_blackout: "OoT Short Blackout",
    GameType.pokemon_ruby_sapphire: "Poké Ruby/Sapph",
    GameType.adams_family: "Addams Family",
    GameType.sonic_adventure_2: "SA2",
    GameType.dark_souls: "Dark Souls",
    GameType.road_trip_adventure: "Road Trip Adv.",
    GameType.psychonauts: "Psychonauts",
    GameType.super_mario_galaxy: "SM Galaxy",
    GameType.banjo_tooie: "Banjo-Tooie",
    GameType.ff4_ancient_cave: "FF4 Ancient Cave",
    GameType.zelda_botw: "Zelda: BotW",
    GameType.sonic_adventure_2_hero_story: "SA2 Hero",
    GameType.the_witness: "The Witness",
    GameType.pikmin_2: "Pikmin 2",
    GameType.alttp_randomizer: "ALttP Random",
    GameType.pokemon_platinum: "Poké Plat.",
    GameType.rayman_ps1: "Rayman",
    GameType.pokemon_crystal_randomizer: "Crystal Current",
    GameType.pokemon_emerald_randomizer: "Emerald Random",
    GameType.pokemon_crystal_classic_randomizer: "Crystal Classic",
    GameType.sonic_adventure_2_dark_story: "SA2 Dark",
    GameType.sonic_adventure_2_long: "SA2 Long",
    GameType.zelda_skyward_sword: "Zelda: SS",
    GameType.super_mario_odyssey: "SMO",
    GameType.super_mario_odyssey_long: "SMO Long",
    GameType.rabi_ribi: "Rabi-Ribi",
    GameType.generic_bingo: "Generic",
    GameType.generic_bingo_deluxe: "Generic Deluxe",
    GameType.harry_potter_2: "HP2",
    GameType.pokemon_emerald_randomizer_prelilycove: "Emerald Pre-Lilycove",
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
    game_type_value = models.IntegerField("Game Type", choices=GameType.sorted_choices())
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
    def get_all_for_room(room):
        chat_events = list(ChatEvent.objects.filter(player__room=room))
        goal_events = list(GoalEvent.objects.filter(player__room=room))
        color_events = list(ColorEvent.objects.filter(player__room=room))
        revealed_events = list(RevealedEvent.objects.filter(player__room=room))
        connection_events = list(ConnectionEvent.objects.filter(player__room=room))
        new_card_events = list(NewCardEvent.objects.filter(player__room=room))
        all_events = chat_events + goal_events + color_events + revealed_events + connection_events
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
            "text": self.body,
            "timestamp": self.json_timestamp
        }

class NewCardEvent(Event):

    def to_json(self):
        return {
            "type": "new-card",
            "player": self.player.to_json(),
            "player_color": self.player_color.name,
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


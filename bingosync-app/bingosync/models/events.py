from django.db import models, transaction
from django.utils import timezone

import datetime
from enum import Enum, unique

from bingosync.models.colors import Color
from bingosync.models.game_type import GameType

class Event(models.Model):
    player = models.ForeignKey("bingosync.Player", on_delete=models.CASCADE)
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
    square = models.ForeignKey("bingosync.Square", on_delete=models.CASCADE)
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

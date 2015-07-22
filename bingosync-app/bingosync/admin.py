from django.contrib import admin
from django.core import urlresolvers
from django.contrib.sessions.models import Session
from django.forms import Textarea
from django.db import models

import json
import pprint

from .models import Room, Game, Square, Player, ChatEvent, GoalEvent, ColorEvent, ConnectionEvent

class GameInline(admin.StackedInline):
    model = Game
    extra = 0

    readonly_fields = ["link_to_game"]

    def link_to_game(self, obj):
        link = urlresolvers.reverse("admin:bingosync_game_change", args=[obj.id])
        return '<a href="%s">%s</a>' % (link, str(obj))

    link_to_game.allow_tags = True

class PlayerInline(admin.StackedInline):
    model = Player
    extra = 0

class SquareInline(admin.TabularInline):
    model = Square
    extra = 0

class ChatEventInline(admin.TabularInline):
    model = ChatEvent
    extra = 0
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':2, 'cols':40})},
    }

class GoalEventInline(admin.TabularInline):
    model = GoalEvent
    extra = 0

class ColorEventInline(admin.TabularInline):
    model = ColorEvent
    extra = 0

class ConnectionEventInline(admin.TabularInline):
    model = ConnectionEvent
    extra = 0

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    inlines = [GameInline, PlayerInline]
    list_display = ["__str__", "created_date", "num_games", "num_players", "encoded_uuid"]
    view_on_site = True

    readonly_fields = ["passphrase"]

    def num_games(self, room):
        return len(room.games)
    num_games.short_description = "Games"

    def num_players(self, room):
        return len(room.players)
    num_players.short_description = "Players"

    def encoded_uuid(self, room):
        return room.encoded_uuid
    encoded_uuid.short_description = "Base 64 UUID"

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    inlines = [SquareInline]
    list_display = ["__str__", "created_date", "room", "seed"]
    readonly_fields = ["link_to_room"]

    def link_to_room(self, obj):
        link = urlresolvers.reverse("admin:bingosync_room_change", args=[obj.room.id])
        return '<a href="%s">%s</a>' % (link, str(obj.room))

    link_to_room.allow_tags = True

@admin.register(Square)
class SquareAdmin(admin.ModelAdmin):
    list_display = ["__str__", "game", "slot", "goal", "color"]

def disconnect_players(modeladmin, request, queryset):
    for player in queryset:
        connection_event = ConnectionEvent.make_disconnected_event(player)
        connection_event.save()
disconnect_players.short_description = "Mark players disconnected"

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    inlines = [ChatEventInline, GoalEventInline, ColorEventInline, ConnectionEventInline]
    list_display = ["__str__", "created_date", "connected", "room", "color"]
    actions = [disconnect_players]

@admin.register(ChatEvent)
class ChatEventAdmin(admin.ModelAdmin):
    list_display = ["__str__", "timestamp", "player", "body_preview"]

    def body_preview(self, obj):
        return obj.body[:100]

@admin.register(ColorEvent)
class ColorEventAdmin(admin.ModelAdmin):
    list_display = ["__str__", "timestamp", "player", "player_color", "color"]

@admin.register(GoalEvent)
class GoalEventAdmin(admin.ModelAdmin):
    list_display = ["__str__", "timestamp", "player", "color", "goal"]

    def goal(self, obj):
        return obj.square.goal

@admin.register(ConnectionEvent)
class ConnectionEventAdmin(admin.ModelAdmin):
    list_display = ["__str__", "timestamp", "player", "event_type"]


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):

    def _session_data(self, obj):
        session_dict = obj.get_decoded()
        session_json = json.dumps(session_dict, indent=4, sort_keys=True)
        return "<pre><code>" + session_json + "</pre></code>"

    _session_data.allow_tags=True
    list_display = ['session_key', '_session_data', 'expire_date']
    readonly_fields = ['_session_data']
    exclude = ['session_data']
    date_hierarchy='expire_date'


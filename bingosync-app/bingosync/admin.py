from django.contrib import admin
from django.core import urlresolvers
from django.contrib.sessions.models import Session

import json
import pprint

from .models import Room, Game, Square, Player, ChatEvent, GoalEvent, ConnectionEvent

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

class ChatInline(admin.TabularInline):
    pass

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

class SquareInline(admin.TabularInline):
    model = Square
    extra = 0

class GameAdmin(admin.ModelAdmin):
    inlines = [SquareInline]
    readonly_fields = ["link_to_room"]

    def link_to_room(self, obj):
        link = urlresolvers.reverse("admin:bingosync_room_change", args=[obj.room.id])
        return '<a href="%s">%s</a>' % (link, str(obj.room))

    link_to_room.allow_tags = True

admin.site.register(Room, RoomAdmin)
admin.site.register(Game, GameAdmin)
admin.site.register(Square)
admin.site.register(Player)
admin.site.register(ChatEvent)
admin.site.register(GoalEvent)
admin.site.register(ConnectionEvent)

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

admin.site.register(Session, SessionAdmin)


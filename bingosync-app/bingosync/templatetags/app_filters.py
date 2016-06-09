from django import template
from django.utils.html import escape
from django.utils.safestring import mark_safe

register = template.Library()

@register.filter
def num_goals(game, color):
    return len([square for square in game.squares if square.color == color])

@register.filter
def hovertext_game_type(game_type):
    title = escape(game_type.long_name)
    short_name = escape(str(game_type))
    return mark_safe('<span title="' + title + '">' + short_name + '</span>')

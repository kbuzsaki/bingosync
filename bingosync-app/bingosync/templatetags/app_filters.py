from django import template

register = template.Library()

@register.filter
def num_goals(game, color):
    return len([square for square in game.squares if square.color == color])

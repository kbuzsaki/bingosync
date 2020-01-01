from enum import Enum, unique

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

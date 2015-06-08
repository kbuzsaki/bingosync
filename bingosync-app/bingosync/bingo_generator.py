from urllib.request import urlopen
import execjs
import json
import random
from termcolor import colored

SRL_BASE = "http://speedrunslive.com"
BINGO_URL = SRL_BASE + "/tools/oot-bingo"

def load_generator_source():
    # super hacky way to load the generator js from srl so it's not stored in the repo
    page_text = urlopen(BINGO_URL).read().decode("utf-8").split()
    js_url_line = [line for line in page_text if "bingo" in line and "script" in line][0]
    js_url = js_url_line.split('"')[1]

    print("js_url", js_url)

    # srl stores the generator in strings and evals them on the page
    # so we need to add evals for the string variables
    js_text = urlopen(SRL_BASE + js_url).read().decode("utf-8")
    var_names = [line.split(" ")[1] for line in js_text.split("\n") if " " in line]
    # only the first 3 lines are actually used for the generator
    # the rest are for the ui and use jquery which we don't want to load
    var_names = var_names[:4]

    var_eval = "\n".join("eval(" + var_name + ");" for var_name in var_names)
    full_js = js_text + var_eval + "\n"
    return full_js

def load_generator():
    return BingoGenerator(load_generator_source())


class BingoGenerator:
    CACHED_INSTANCE = None

    @staticmethod
    def loaded():
        return BingoGenerator.CACHED_INSTANCE is not None

    @staticmethod
    def instance():
        if not BingoGenerator.CACHED_INSTANCE:
            BingoGenerator.CACHED_INSTANCE = load_generator()
        return BingoGenerator.CACHED_INSTANCE

    @staticmethod
    def reload():
        BingoGenerator.CACHED_INSTANCE = loadGenerator()

    def __init__(self, generator_js):
        self.generator_js = generator_js
        self.context = execjs.compile(generator_js)

    def get_card(self, seed=None):
        if seed is not None:
            # needs quotes cuz it's dumb
            opts = "{ seed: \"" + str(seed) + "\" }"
        else:
            opts = "{}"

        js_command = "ootBingoGenerator(bingoList, " + opts + ")"
        card = self.context.eval(js_command)
        # for some reason the first element of the list is a garbage None?
        card = card[1:]

        return card

    def get_blackout_card(self, team_size=3):
        # just try to generate a bunch of cards
        # if we fail too many times, abort
        for attempt in range(100):
            seed = random.randint(0, 1000000)
            print(colored("trying seed: " + str(seed), "yellow"))
            card = self.get_card(seed)
            if is_blackout_card(card, team_size):
                return seed, card
        raise Exception("Failed to generate card for teamsize: " + str(team_size))

# list of groups goals which cannot be completed on the same file
# prevent more of these from being on a card than their are players
EXCLUSIVE_GOALS_LIST = [
    [
        'Green Gauntlets',
        'Golden Gauntlets',
        'Silver Gauntlets',
        'Bronze Gauntlets',
        'Blue Gauntlets',
        'Goron Bracelet'
    ]
]

OVERLAP_GOALS_LIST = [
    [
        '3 unused keys in Gerudo Training Grounds',
        '4 unused keys in Gerudo Training Grounds',
        '5 unused keys in Gerudo Training Grounds',
        '6 unused keys in Gerudo Training Grounds',
        '8 different unused keys in Gerudo Training Grounds',
    ],
    [
        '6 Compasses',
        '7 Compasses',
    ],
    [
        '6 Maps',
        '7 Maps',
    ],
    [
        '6 Hearts',
        '7 Hearts',
        '8 Hearts',
        '9 Hearts',
    ],
    [
        'Bullet Bag (40)',
        'Bullet Bag (50)',
    ],
    [
        'Quiver (40)',
        'Quiver (50)',
    ],
    [
        'At least 3 songs',
        'At least 4 songs',
        'At least 6 songs',
        'At least 8 songs',
        'At least 9 songs',
    ],
    [
        'Defeat Queen Gohma',
        'Beat the Deku Tree',
    ],
    [
        'Defeat King Dodongo',
        "Beat Dodongo's Cavern",
    ],
    [
        'Defeat Barinade',
        "Beat Jabu-Jabu's Belly",
    ],
    [
        'Defeat Phantom Ganon',
        'Beat the Forest Temple',
    ],
    [
        'Defeat Volvagia',
        'Beat the Fire Temple',
    ],
    [
        'Defeat Morpha',
        'Beat the Water Temple',
    ],
    [
        'Defeat Bongo-Bongo',
        'Beat the Shadow Temple',
    ],
    [
        'Defeat Nabooru-Knuckle',
        'Defeat Twinrova',
        'Beat the Spirit Temple',
    ],
    [
        'At least 3 Skulltulas in Water Temple',
        'All 5 Skulltulas in Water Temple',
    ],
    [
        'At least 4 Skulltulas in Shadow Temple',
        'All 5 Skulltulas in Shadow Temple',
    ],
    [
        'Goron Tunic',
        'Zora Tunic',
        '3 Tunics',
        '3 Swords & 3 Tunics',
        '3 Tunics & 3 Boots',
        '3 Shields & 3 Tunics',
    ],
    [
        'Iron Boots',
        '3 Boots',
        '3 Shields & 3 Boots',
        '3 Swords & 3 Boots',
        '3 Tunics & 3 Boots',
    ],
    [
        'Mirror Shield',
        '3 Swords & 3 Shields',
        '3 Shields & 3 Boots',
        '3 Shields & 3 Tunics',
    ],
    [
        "Giant's Knife",
        '3 Swords & 3 Tunics',
        '3 Swords & 3 Boots',
        '3 Swords & 3 Shields',
    ],
    [
        'At least 7 Magic Beans',
        'At least 9 Magic Beans',
    ],
    [
        'Fairy Bow',
        'Defeat Amy (Green Poe)',
        'Defeat Meg (purple Poe)',
    ],
    [
        'Fairy Bow',
        'Forest Temple Boss Key',
    ],
    [
        'Fairy Bow',
        'Fire Arrow',
    ],
    [
        "Giant's Wallet",
        '500 Rupees',
    ],
    [
        'Defeat Dark Link',
        'Longshot',
    ],
    [
        'Fire Temple Boss Key',
        'Free all 9 gorons in Fire Temple',
    ]
]

def get_instance_count(card, goals):
    return len([goal for goal in card if goal in goals])

def is_blackout_card(card, teamSize=3):
    names = [goal["name"] for goal in card]

    # no duplicates allowed
    if len(names) != len(set(names)):
        return False

    for exclusive_goals in EXCLUSIVE_GOALS_LIST:
        count = get_instance_count(names, exclusive_goals)
        if count > teamSize:
            return False

    for overlap_goals in OVERLAP_GOALS_LIST:
        count = get_instance_count(names, overlap_goals)
        if count > 1:
            return False

    return True

def getCardUrl(seed):
    return SRL_BASE + "/tools/oot-bingo/?seed=" + str(seed)


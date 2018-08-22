from enum import Enum, unique

from .bingo_generator import BingoGenerator

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
    pokemon_emerald_old_randomizer = 40
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
    pokemon_emerald_old_randomizer_short = 51
    hollow_knight = 52
    jade_cocoon = 53
    mass_effect_2 = 54
    alttp_enemy_randomizer = 55
    happy_wheels_level_editor = 56
    secret_of_mana = 57
    secret_of_mana_german = 58
    secret_of_mana_short = 59
    secret_of_mana_short_german = 60
    final_fantasy_1_randomizer_short = 61
    final_fantasy_1_randomizer_long = 62
    ff4_free_enterprise = 63
    spyro_2_4_x = 64
    yugioh_forbidden_memories = 65
    links_awakening = 66
    dark_souls_3 = 67
    bloodborne = 68
    cuphead = 69
    pokemon_black_white = 70
    battleblock_theater = 71
    battle_for_bikini_bottom = 72
    luigis_mansion = 73
    luigis_mansion_dark_moon = 74
    yokus_island_express = 75
    league_of_legends_aram = 76
    legend_of_mana = 77
    castlevania_aria_of_sorrow = 78
    nier_automata = 79
    octopath_traveler = 80
    splatoon_2_octo_expansion = 81
    pokemon_emerald_randomizer = 82
    resident_evil_hd_randomizer = 83
    wii_sports_resort = 84
    wii_sports_resort_all_stamps = 85
    cardfight_vanguard = 86
    super_mario_odyssey_short = 87
    yooka_laylee = 88
    ocarina_of_time_item_randomizer = 89
    ocarina_of_time_item_randomizer_blackout = 90
    zelda_botw_short = 91
    zelda_botw_long = 92

    def __str__(self):
        return self.short_name

    @property
    def group(self):
        return GAME_TYPE_GROUPS[self]

    @property
    def group_name(self):
        return GAME_TYPE_GROUP_NAMES[self]

    @property
    def long_name(self):
        return GAME_TYPE_LONG_NAMES[self]

    @property
    def short_name(self):
        return GAME_TYPE_SHORT_NAMES[self]

    @property
    def variant_name(self):
        return GAME_TYPE_VARIANT_NAMES[self]

    @property
    def is_game_group(self):
        return self.group == self

    @property
    def is_custom(self):
        return self == GameType.custom

    @staticmethod
    def for_value(value):
        return list(GameType)[value - 1]

    def generator_instance(self):
        return BingoGenerator.instance(self.name)

    @staticmethod
    def choices():
        return [(game_type.value, game_type.long_name) for game_type in GameType]

    @staticmethod
    def game_choices():
        choices = [(gt.value, gt.group_name) for gt in GAME_GROUPS if gt.is_game_group and not gt.is_custom]
        choices = list(sorted(choices, key=lambda el: el[1]))
        return [(None, '')] + choices + [(GameType.custom.value, GameType.custom.group_name)]

    @staticmethod
    def variant_choices():
        return [(group_gt.value, [(gt.value, name) for gt, name, short_name in group['variants']]) for group_gt, group in GAME_GROUPS.items()]


DEFAULT_VARIANT_NAME = "Normal"
def singleton_group(game_type, name, short_name):
    return {
        game_type: {
            "name": name,
            "variants": [
                (game_type, DEFAULT_VARIANT_NAME, short_name),
            ],
        }
    }


GAME_GROUPS = {
    GameType.ocarina_of_time: {
        "name": "Zelda: Ocarina of Time",
        "variants": [
            (GameType.ocarina_of_time, "Normal", "Zelda: OoT"),
            (GameType.ocarina_of_time_blackout, "Blackout", "OoT Blackout"),
            (GameType.ocarina_of_time_short, "Short", "OoT Short"),
            (GameType.ocarina_of_time_short_blackout, "Short Blackout", "OoT Short Blackout"),
            (GameType.ocarina_of_time_item_randomizer, "Item Randomizer", "OoT IR"),
            (GameType.ocarina_of_time_item_randomizer_blackout, "Item Randomizer Blackout", "OoT IR Blackout"),
        ],
    },
    GameType.secret_of_mana: {
        "name": "Secret of Mana",
        "variants": [
            (GameType.secret_of_mana, "Normal", "SoM"),
            (GameType.secret_of_mana_german, "German", "SoM German"),
            (GameType.secret_of_mana_short, "Short", "SoM Short"),
            (GameType.secret_of_mana_short_german, "Short German", "SoM Short German"),
        ],
    },
    GameType.pokemon_emerald_randomizer: {
        "name": "Pokémon Emerald",
        "variants": [
            (GameType.pokemon_emerald_randomizer, "Randomizer", "Emerald"),
            (GameType.pokemon_emerald_old_randomizer, "Old Randomizer", "Emerald Old"),
            (GameType.pokemon_emerald_old_randomizer_short, "Short Old Randomizer", "Emerald Old Short"),
        ],
    },
    GameType.pokemon_crystal: {
        "name": "Pokémon Crystal",
        "variants": [
            (GameType.pokemon_crystal, "Normal", "Poké Crystal"),
            (GameType.pokemon_crystal_randomizer, "Current Randomizer", "Crystal Current"),
            (GameType.pokemon_crystal_classic_randomizer, "Classic Randomizer", "Crystal Classic"),
        ],
    },
    GameType.pokemon_red_blue: {
        "name": "Pokémon Red/Blue",
        "variants": [
            (GameType.pokemon_red_blue, "Normal", "Poké Red/Blue"),
            (GameType.pokemon_red_blue_randomizer, "Randomizer", "Red/Blue Random"),
        ],
    },
    GameType.sonic_adventure_2: {
        "name": "Sonic Adventure 2",
        "variants": [
            (GameType.sonic_adventure_2, "Normal", "SA2"),
            (GameType.sonic_adventure_2_hero_story, "Hero Story", "SA2 Hero"),
            (GameType.sonic_adventure_2_dark_story, "Dark Story", "SA2 Dark"),
            (GameType.sonic_adventure_2_long, "Long", "SA2 Long"),
        ],
    },
    GameType.super_mario_odyssey: {
        "name": "Super Mario Odyssey",
        "variants": [
            (GameType.super_mario_odyssey, "Normal", "SMO"),
            (GameType.super_mario_odyssey_short, "Short", "SMO Short"),
            (GameType.super_mario_odyssey_long, "Long", "SMO Long"),
        ],
    },
    GameType.generic_bingo: {
        "name": "Generic Bingo",
        "variants": [
            (GameType.generic_bingo, "Normal", "Generic"),
            (GameType.generic_bingo_deluxe, "Deluxe", "Generic Deluxe"),
        ],
    },
    GameType.alttp_randomizer: {
        "name": "Zelda: A Link to the Past",
        "variants": [
            (GameType.alttp_randomizer, "Randomizer", "ALttP Random"),
            (GameType.alttp_enemy_randomizer, "Enemy Randomizer", "ALttP Enemizer"),
        ],
    },
    GameType.ff4_ancient_cave: {
        "name": "Final Fantasy 4",
        "variants": [
            (GameType.ff4_ancient_cave, "Ancient Cave", "FF4 AC"),
            (GameType.ff4_free_enterprise, "Free Enterprise", "FF4 FE"),
        ],
    },
    GameType.final_fantasy_1: {
        "name": "Final Fantasy 1",
        "variants": [
            (GameType.final_fantasy_1, "Normal", "FF1"),
            (GameType.final_fantasy_1_randomizer_short, "Randomizer Short", "FF1 Random Short"),
            (GameType.final_fantasy_1_randomizer_long, "Randomizer Long (Defeat Chaos)", "FF1 Random Long"),
        ],
    },
    GameType.spyro_2: {
        "name": "Spyro 2: Ripto's Rage",
        "variants": [
            (GameType.spyro_2, "3.1", "Spyro 2 - 3.1"),
            (GameType.spyro_2_4_x, "4.1", "Spyro 2 - 4.1"),
        ],
    },
    GameType.wii_sports_resort: {
            "name": "Wii Sports Resort",
        "variants": [
            (GameType.wii_sports_resort, "Normal", "WSR"),
            (GameType.wii_sports_resort_all_stamps, "All Stamps", "WSR All Stamps"),
        ],
    },
    GameType.lufia_2: {
        "name": "Lufia 2",
        "variants": [
            (GameType.lufia_2, "Ancient Cave", "Lufia 2 AC"),
        ],
    },
    GameType.links_awakening: {
        "name": "Zelda: Link's Awakening",
        "variants": [
            (GameType.links_awakening, "Randomizer", "LADX Random"),
        ],
    },
    GameType.resident_evil_hd_randomizer: {
        "name": "Resident Evil: HD",
        "variants": [
            (GameType.resident_evil_hd_randomizer, "Randomizer", "REHD Random"),
        ],
    },
    GameType.zelda_botw: {
        "name": "Zelda: Breath of the Wild",
        "variants": [
            (GameType.zelda_botw, "Normal", "BotW Normal"),
            (GameType.zelda_botw_short, "Short", "BotW Short"),
            (GameType.zelda_botw_long, "Long", "BotW Long"),
        ],
    },
    **singleton_group(GameType.super_mario_64, "Super Mario 64", "SM64"),
    **singleton_group(GameType.majoras_mask, "Zelda: Majora's Mask", "Zelda: MM"),
    **singleton_group(GameType.super_metroid, "Super Metroid", "Super Metroid"),
    **singleton_group(GameType.castlevania_sotn, "Castlevania: Symphony of the Night", "CV: SotN"),
    **singleton_group(GameType.super_mario_world, "Super Mario World", "SMW"),
    **singleton_group(GameType.donkey_kong_64, "Donkey Kong 64", "DK64"),
    **singleton_group(GameType.pikmin, "Pikmin", "Pikmin"),
    **singleton_group(GameType.super_mario_sunshine, "Super Mario Sunshine", "SMS"),
    **singleton_group(GameType.crash_twinsanity, "Crash Twinsanity", "Crash Twins."),
    **singleton_group(GameType.lego_star_wars, "Lego Star Wars", "Lego SW"),
    **singleton_group(GameType.pokemon_snap, "Pokémon Snap", "Poké Snap"),
    **singleton_group(GameType.pokemon_ruby_sapphire, "Pokémon Ruby/Sapphire", "Poké Ruby/Sapph"),
    **singleton_group(GameType.pokemon_black_white, "Pokémon Black/White", "Poké BW"),
    **singleton_group(GameType.adams_family, "The Addams Family (SNES)", "Addams Family"),
    **singleton_group(GameType.bloodborne, "Bloodborne", "Bloodborne"),
    **singleton_group(GameType.dark_souls, "Dark Souls", "Dark Souls"),
    **singleton_group(GameType.dark_souls_3, "Dark Souls 3", "Dark Souls 3"),
    **singleton_group(GameType.road_trip_adventure, "Road Trip Adventure", "Road Trip Adv."),
    **singleton_group(GameType.psychonauts, "Psychonauts", "Psychonauts"),
    **singleton_group(GameType.super_mario_galaxy, "Super Mario Galaxy", "SM Galaxy"),
    **singleton_group(GameType.banjo_tooie, "Banjo-Tooie", "Banjo-Tooie"),
    **singleton_group(GameType.the_witness, "The Witness", "The Witness"),
    **singleton_group(GameType.pikmin_2, "Pikmin 2", "Pikmin 2"),
    **singleton_group(GameType.pokemon_platinum, "Pokémon Platinum", "Poké Plat."),
    **singleton_group(GameType.rayman_ps1, "Rayman (PS1)", "Rayman"),
    **singleton_group(GameType.zelda_skyward_sword, "Zelda: Skyward Sword", "Zelda: SS"),
    **singleton_group(GameType.rabi_ribi, "Rabi-Ribi", "Rabi-Ribi"),
    **singleton_group(GameType.harry_potter_2, "Harry Potter and the Chamber of Secrets", "HP2"),
    **singleton_group(GameType.hollow_knight, "Hollow Knight", "Hollow Knight"),
    **singleton_group(GameType.jade_cocoon, "Jade Cocoon: Story of the Tamamayu", "Jade Cocoon: SotT"),
    **singleton_group(GameType.mass_effect_2, "Mass Effect 2", "Mass Effect 2"),
    **singleton_group(GameType.happy_wheels_level_editor, "Happy Wheels Level Editor", "HW Level Editor"),
    **singleton_group(GameType.custom, "Custom (Advanced)", "Custom"),
    **singleton_group(GameType.yugioh_forbidden_memories, "Yu-Gi-Oh! Forbidden Memories", "YGO FM"),
    **singleton_group(GameType.cuphead, "Cuphead", "Cuphead"),
    **singleton_group(GameType.battleblock_theater, "BattleBlock Theater", "BBT"),
    **singleton_group(GameType.battle_for_bikini_bottom, "SpongeBob SquarePants: Battle for Bikini Bottom", "BFBB"),
    **singleton_group(GameType.luigis_mansion, "Luigi's Mansion", "Luigi's Mansion"),
    **singleton_group(GameType.luigis_mansion_dark_moon, "Luigi's Mansion: Dark Moon", "LM Dark Moon"),
    **singleton_group(GameType.yokus_island_express, "Yoku's Island Express", "Yoku's IE"),
    **singleton_group(GameType.league_of_legends_aram, "League of Legends ARAM", "LoL ARAM"),
    **singleton_group(GameType.legend_of_mana, "Legend of Mana", "LoM"),
    **singleton_group(GameType.castlevania_aria_of_sorrow, "Castlevania: Aria of Sorrow", "CV: AoS"),
    **singleton_group(GameType.nier_automata, "NieR: Automata", "NieR"),
    **singleton_group(GameType.octopath_traveler, "Octopath Traveler", "Octopath"),
    **singleton_group(GameType.splatoon_2_octo_expansion, "Splatoon 2: Octo Expansion", "Splatoon 2: OE"),
    **singleton_group(GameType.cardfight_vanguard, "Cardfight!! Vanguard", "CFVG"),
    **singleton_group(GameType.yooka_laylee, "Yooka-Laylee", "Yook"),
}

GAME_TYPE_GROUPS = {}
GAME_TYPE_GROUP_NAMES = {}
GAME_TYPE_LONG_NAMES = {}
GAME_TYPE_SHORT_NAMES = {}
GAME_TYPE_VARIANT_NAMES = {}
ALL_VARIANTS = []
for group, entry in GAME_GROUPS.items():
    name = entry["name"]
    variants = entry["variants"]
    for game, variant_name, short_name in variants:
        if len(variants) == 1 and variant_name == "Normal":
            long_name = name
        else:
            long_name = name + " - " + variant_name
        GAME_TYPE_GROUPS[game] = group
        GAME_TYPE_GROUP_NAMES[game] = name
        GAME_TYPE_LONG_NAMES[game] = long_name
        GAME_TYPE_SHORT_NAMES[game] = short_name
        GAME_TYPE_VARIANT_NAMES[game] = variant_name
        ALL_VARIANTS.append(game)

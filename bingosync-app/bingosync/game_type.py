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
    pokemon_emerald_randomizer_short = 51
    hollow_knight = 52
    jade_cocoon = 53
    mass_effect_2 = 54
    alttp_enemy_randomizer = 55

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
    GameType.alttp_randomizer: "Zelda: A Link to the Past - Randomizer",
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
    GameType.pokemon_emerald_randomizer_short: "Pokémon Emerald - Short Randomizer",
    GameType.hollow_knight: "Hollow Knight",
    GameType.jade_cocoon: "Jade Cocoon: Story of the Tamamayu",
    GameType.mass_effect_2: "Mass Effect 2",
    GameType.alttp_enemy_randomizer: "Zelda: A Link to the Past - Enemy Randomizer",
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
    GameType.pokemon_emerald_randomizer_short: "Emerald Short",
    GameType.hollow_knight: "Hollow Knight",
    GameType.jade_cocoon: "Jade Cocoon: SotT",
    GameType.mass_effect_2: "Mass Effect 2",
    GameType.alttp_enemy_randomizer: "ALttP Enemizer",
}


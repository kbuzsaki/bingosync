import execjs


CACHED_FILES_BY_NAME = {
    "ocarina_of_time": "generators/ocarina_of_time_generator.js",
    "super_mario_64": "generators/super_mario_64_generator.js",
    "majoras_mask": "generators/majoras_mask_generator.js",
    "super_metroid": "generators/super_metroid_generator.js",
    "castlevania_sotn": "generators/castlevania_sotn_generator.js",
    "super_mario_world": "generators/super_mario_world_generator.js",
    "pokemon_red_blue": "generators/pokemon_red_blue_generator.js",
    "pokemon_crystal": "generators/pokemon_crystal_generator.js",
    "donkey_kong_64": "generators/donkey_kong_64_generator.js",
    "pikmin": "generators/pikmin_generator.js",
    "super_mario_sunshine": "generators/super_mario_sunshine_generator.js",
    "pokemon_red_blue_randomizer": "generators/pokemon_red_blue_randomizer_generator.js",
    "final_fantasy_1": "generators/final_fantasy_1_generator.js",
    "crash_twinsanity": "generators/crash_twinsanity_generator.js",
    "lufia_2": "generators/lufia_2_generator.js",
    "lego_star_wars": "generators/lego_star_wars_generator.js",
    "spyro_2": "generators/spyro_2_generator.js",
    "pokemon_snap": "generators/pokemon_snap_generator.js",
    "ocarina_of_time_blackout": "generators/ocarina_of_time_blackout_generator.js",
    "ocarina_of_time_short": "generators/ocarina_of_time_short_generator.js",
    "ocarina_of_time_short_blackout": "generators/ocarina_of_time_short_blackout_generator.js",
    "pokemon_ruby_sapphire": "generators/pokemon_ruby_sapphire_generator.js",
    "adams_family": "generators/adams_family_generator.js",
    "sonic_adventure_2": "generators/sonic_adventure_2_generator.js",
    "dark_souls": "generators/dark_souls_generator.js",
    "road_trip_adventure": "generators/road_trip_adventure_generator.js",
    "psychonauts": "generators/psychonauts_generator.js",
    "super_mario_galaxy": "generators/super_mario_galaxy_generator.js",
    "banjo_tooie": "generators/banjo_tooie_generator.js",
    "ff4_ancient_cave": "generators/ff4_ancient_cave_generator.js",
    "zelda_botw": "generators/zelda_botw_generator.js",
    "sonic_adventure_2_hero_story": "generators/sonic_adventure_2_hero_story_generator.js",
    "the_witness": "generators/the_witness_generator.js",
    "pikmin_2": "generators/pikmin_2_generator.js",
    "alttp_randomizer": "generators/alttp_randomizer_generator.js",
    "pokemon_platinum": "generators/pokemon_platinum_generator.js",
    "rayman_ps1": "generators/rayman_ps1_generator.js",
    "pokemon_crystal_randomizer": "generators/pokemon_crystal_randomizer_generator.js",
    "pokemon_emerald_randomizer": "generators/pokemon_emerald_randomizer_generator.js",
    "pokemon_crystal_tournament": "generators/pokemon_crystal_tournament_generator.js",
    "sonic_adventure_2_dark_story": "generators/sonic_adventure_2_dark_story_generator.js",
    "sonic_adventure_2_long": "generators/sonic_adventure_2_long_generator.js",
    "zelda_skyward_sword": "generators/zelda_skyward_sword_generator.js",
    "super_mario_odyssey_short": "generators/super_mario_odyssey_short_generator.js",
    "super_mario_odyssey": "generators/super_mario_odyssey_generator.js",
    "rabi_ribi": "generators/rabi_ribi_generator.js",
    "generic_bingo": "generators/generic_bingo_generator.js",
}


def load_generator(game_name):
    filename = CACHED_FILES_BY_NAME[game_name]
    with open(filename) as js_file:
        return BingoGenerator(js_file.read())


class BingoGenerator:
    CACHED_INSTANCES = {}

    @staticmethod
    def loaded(game_name):
        return game_name in BingoGenerator.CACHED_INSTANCES

    @staticmethod
    def instance(game_name):
        if game_name not in BingoGenerator.CACHED_INSTANCES:
            BingoGenerator.CACHED_INSTANCES[game_name] = load_generator(game_name)
        return BingoGenerator.CACHED_INSTANCES[game_name]

    @staticmethod
    def reload(game_name):
        BingoGenerator.CACHED_INSTANCES[game_name] = load_generator(game_name)

    def __init__(self, generator_js):
        self.generator_js = generator_js
        self.context = execjs.compile(generator_js)

    def get_card(self, seed=None):
        opts = "{}"
        if seed is not None:
            # the generator *actually* treats the seed as a string
            opts = "{ seed: \"" + str(seed) + "\" }"

        js_command = "bingoGenerator(bingoList, " + opts + ")"
        card = self.context.eval(js_command)
        return process_card(card)


def process_card(card):
    # for some reason the first element of the list is a garbage None?
    return card[1:]

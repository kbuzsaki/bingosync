import os

import execjs


GEN_DIR = "generators"
GEN_NAME_TEMPL = "{}_generator.js"


def load_generator(game_name):
    filename = os.path.join(GEN_DIR, GEN_NAME_TEMPL.format(game_name))
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

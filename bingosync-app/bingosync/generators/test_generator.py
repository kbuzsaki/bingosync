from django import test

import itertools
import json
import os
import sys

from bingosync.generators import GeneratorException
from bingosync.models import GameType
from bingosync.settings import GEN_TESTDATA_DIR

TEST_TYPES = [game_type for game_type in GameType if not game_type.is_custom]
TEST_SEEDS = [1, 1000, 1234, 12345]

# games that are intentionally close to duplicates of another game
DUPLICATE_GUARD_BLACKLIST = {
    GameType.super_metroid_double_anti_bingo,
    GameType.hollow_knight_item_rando_tiebreakerless,
}

def get_golden_data(game_type, seed):
    output_path = os.path.join(GEN_TESTDATA_DIR, game_type.name, str(seed) + ".json")
    if not os.path.exists(output_path):
        raise Exception("golden data missing for game '" + game_type.name + "', seed '"
                        + str(seed) + "', run ./manage.py gentestdata")
    with open(output_path) as infile:
        return json.load(infile)

def freeze_dict(d):
    return tuple(tuple(sorted(element.items())) for element in d)

class GoldenDataTestCase(test.TestCase):

    def test_golden_data(self):
        data_map = {}
        for game_type in TEST_TYPES:
            for seed in TEST_SEEDS:
                raw_golden_data = get_golden_data(game_type, seed)
                for goal in raw_golden_data:
                    self.assertNotIn('"name":', goal["name"], str(game_type) + ", " + str(seed))
                golden_data = freeze_dict(raw_golden_data)
                if golden_data in data_map and game_type not in DUPLICATE_GUARD_BLACKLIST:
                    original_type, original_seed = data_map[golden_data]
                    self.fail("got duplicate card from ({}, {}), original was ({}, {})"
                            .format(game_type.name, seed, original_type.name, original_seed))
                else:
                    data_map[golden_data] = game_type, seed


class TimeoutTestCase(test.TestCase):

    def test_eval_timeout(self):
        try:
            GameType.celeste.generator_instance().eval("(function() { for (var i = 0; true; i++) {} }())")
            self.fail("Failed to time out!")
        except GeneratorException as e:
            pass


def test_get_card(self, game_type):
    """ Tests whether the generator generates any valid card """
    board_json = game_type.generator_instance().get_card(1)
    self.assertEqual(len(board_json), 25)
    for i, el in enumerate(board_json):
        self.assertIn("name", el, "i: " + str(i) + ", el: " + repr(el))

def test_card_correctness(self, game_type, seed):
    """ Tests whether the generator generates the correct card as compared to golden data """
    board_json = game_type.generator_instance().get_card(seed)
    golden_json = get_golden_data(game_type, seed)
    msg = "game: " + game_type.name + ", seed: " + str(seed)
    self.assertListEqual(board_json, golden_json, msg=msg)

def make_test(testfn, args):
    """ Generate a test method invoking testfn but passing args along to it.
        For use with parametrize_test() below.
    """
    def fn(self):
        testfn(self, *args)
    return fn

def parametrize_test(test_class, name_template, testfn, arglists):
    """ Dynamically add testcases to the given test class by taking the product of the
        argument lists. For example:
            parametrize_test(SomeTest, "something_{}_{}", some_fn, [colors, animals])
        will add a test method to SomeTest for every (color, animal) pair that invokes
        some_fn(color, animal). It also names the function using the template, e.g.
        "test_something_{color}_{animal}".
    """
    for args in itertools.product(*arglists):
        test_name = "test_" + name_template.format(*args)
        test_func = make_test(testfn, args)
        setattr(test_class, test_name, test_func)

# Some python voodoo that generates a testcase class for each GameType.
# This improves performance for ./manage.py test --parallel, where each TestCase class
# is the unit of parallelism.
for gt in TEST_TYPES:
    name = "GeneratorTest" + str(gt.value)
    test_class = type(name, (test.SimpleTestCase,), {})
    parametrize_test(test_class, "get_card_{.name}", test_get_card, [[gt]])
    parametrize_test(test_class, "correctness_{.name}_{}", test_card_correctness, [[gt], TEST_SEEDS])
    globals()[name] = test_class

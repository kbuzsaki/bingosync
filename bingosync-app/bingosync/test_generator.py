from django import test

import itertools
import json
import os
import sys

from .models import GameType
from .settings import GEN_TESTDATA_DIR

TEST_TYPES = [game_type for game_type in GameType if game_type != GameType.custom]
TEST_SEEDS = [1, 1000, 1234, 12345]

def get_golden_data(game_type, seed):
    output_path = os.path.join(GEN_TESTDATA_DIR, game_type.name, str(seed) + ".json")
    if not os.path.exists(output_path):
        raise Exception("golden data missing for game '" + game_type.name + "', seed '"
                        + str(seed) + "', run ./manage.py gentestdata")
    with open(output_path) as infile:
        return json.load(infile)

def test_get_card(self, game_type):
    """ Tests whether the generator generates any valid card """
    board_json = game_type.generator_instance().get_card(1)
    self.assertEqual(len(board_json), 25)

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

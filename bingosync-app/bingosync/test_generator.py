from django import test

import json
import os
import sys

from .models import GameType
from .settings import GEN_TESTDATA_DIR

TEST_SEEDS = [1, 1000, 1234, 12345]

def get_golden_data(game_type, seed):
    output_path = os.path.join(GEN_TESTDATA_DIR, game_type.name, str(seed) + ".json")
    if not os.path.exists(output_path):
        raise Exception("golden data missing for game '" + game_type.name + "', seed '"
                        + str(seed) + "', run ./manage.py gentestdata")
    with open(output_path) as infile:
        return json.load(infile)

class GeneratorTest(test.SimpleTestCase):

    def setUp(self):
        self.testable_types = [game_type for game_type in GameType if game_type != GameType.custom]

    def test_get_card(self):
        """ Tests whether the generator generates any valid card """
        for game_type in self.testable_types:
            board_json = game_type.generator_instance().get_card(1)
            self.assertEqual(len(board_json), 25)

    def test_card_correctness(self):
        """ Tests whether the generator generates the correct card as compared to golden data """
        for game_type in self.testable_types:
            for seed in TEST_SEEDS:
                board_json = game_type.generator_instance().get_card(seed)
                golden_json = get_golden_data(game_type, seed)
                msg = "game: " + game_type.name + ", seed: " + str(seed)
                self.assertListEqual(board_json, golden_json, msg=msg)

from django.core.management.base import BaseCommand

import json
import os

from bingosync.models import GameType
from bingosync.settings import GEN_TESTDATA_DIR

TEST_SEEDS = [1, 1000, 1234, 12345]

class Command(BaseCommand):
    help = 'Generates test data for the bingogenerators'

    def add_arguments(self, parser):
        parser.add_argument('--regen',
                            action='store_true',
                            dest='regen',
                            default=False,
                            help='Regenerate board data that already exists')

    def handle(self, *args, **options):
        testable_types = [game_type for game_type in GameType if game_type != GameType.custom]
        for game_type in testable_types:
            for seed in TEST_SEEDS:
                if options["regen"] or not data_exists(game_type, seed):
                    print("Generating test data for", game_type.name, "with seed", seed)
                    board_json = generate_board(game_type, seed)
                    save_board(game_type, seed, board_json)

def generate_board(game_type, seed):
    return game_type.generator_instance().get_card(seed)

def save_board(game_type, seed, board_json):
    output_dir = os.path.join(GEN_TESTDATA_DIR, game_type.name)
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, str(seed) + ".json")
    with open(output_path, "w") as outfile:
        json.dump(board_json, outfile, indent=4)

def data_exists(game_type, seed):
    output_path = os.path.join(GEN_TESTDATA_DIR, game_type.name, str(seed) + ".json")
    return os.path.exists(output_path)

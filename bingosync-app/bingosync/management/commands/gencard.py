from django.core.management.base import BaseCommand

import json
import os
import pprint

from bingosync.models import GameType

class Command(BaseCommand):
    help = 'Generates a card for a game'

    def add_arguments(self, parser):
        parser.add_argument("-g", dest="game_type", required=True, help="Game type")
        parser.add_argument("-s", dest="seed", required=True, type=int, help="Seed")

    def handle(self, *args, **options):
        seed = options["seed"]
        gt_str = options["game_type"]
        try:
            game_type = GameType[gt_str]
        except KeyError:
            try:
                game_type = GameType.for_value(int(gt_str))
            except ValueError:
                print("Invalid gt: '" + gt_str + "'")
                return

        board_json = generate_board(game_type, seed)
        pprint.pprint(board_json, indent=4)

def generate_board(game_type, seed):
    return game_type.generator_instance().get_card(seed)

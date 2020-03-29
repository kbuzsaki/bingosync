# utility functions for handling the "custom" GameTypes
# packaged as a "Generator" to allow some generic handling

import json

from bingosync.generators.bingo_generator import BingoGenerator
from bingosync.models.game_type import GameType


class InvalidBoardException(Exception):
    pass


def _validate_square(i, square):
    if "name" not in square:
        raise InvalidBoardException("Square " + str(1 + i)
                + " (" + json.dumps(square) + ") is missing a \"name\" attribute")
    elif square["name"] == "":
        raise InvalidBoardException("Square " + str(1 + i)
                + " (" + json.dumps(square) + ") has an empty \"name\" attribute")


def _parse_simple_list(custom_board, game_type):
    if not isinstance(custom_board, list):
        raise InvalidBoardException("Board must be a list")

    if game_type == GameType.custom and len(custom_board) != 25:
        raise InvalidBoardException("A fixed board must have exactly 25 goals (found "
                + str(len(custom_board)) + ")")
    elif game_type == GameType.custom_randomized and len(custom_board) < 25:
        raise InvalidBoardException("A randomized board must have at least 25 goals (found "
                + str(len(custom_board)) + ")")

    for i, square in enumerate(custom_board):
        _validate_square(i, square)

    return custom_board


class CustomGenerator:

    def __init__(self, game_type):
        if not game_type.is_custom:
            raise Exception("Tried to instantiate CustomGenerator with invalid GameType: " + str(game_type))
        self.game_type = game_type

    def validate_custom_json(self, custom_json):
        try:
            custom_board = json.loads(custom_json)
        except json.decoder.JSONDecodeError as e:
            raise InvalidBoardException("Invalid Board Json")

        if self.game_type in (GameType.custom, GameType.custom_randomized):
            return _parse_simple_list(custom_board, self.game_type)

        raise Exception("Unrecognized custom game type: " + str(self.game_type))

    def get_card(self, seed, custom_board):
        if self.game_type == GameType.custom:
            return custom_board
        elif self.game_type == GameType.custom_randomized:
            return BingoGenerator.instance(str(self.game_type.name)).get_card(seed, custom_board)





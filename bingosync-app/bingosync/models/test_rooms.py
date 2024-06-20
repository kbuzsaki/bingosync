from django import test

import json

from bingosync.models import Room, Game, Player, GameType, LockoutMode, ConnectionEvent


TEST_GAME_TYPE = GameType.celeste


class RoomTestCase(test.TestCase):

    def setUp(self):
            self.room = Room(name="TestRoom", passphrase="passphrase", hide_card=False)
            self.room.save()

            self.previous_game = Game.from_board(25 * [{"name": "foo"}], room=self.room, game_type_value=TEST_GAME_TYPE.value,
                    lockout_mode_value=LockoutMode.non_lockout.value, seed="1234")

            self.current_game = Game.from_board(25 * [{"name": "foo"}], room=self.room, game_type_value=TEST_GAME_TYPE.value,
                    lockout_mode_value=LockoutMode.non_lockout.value, seed="5678")

            self.creator = Player(room=self.room, name="the creator")
            self.creator.save()

            self.connected_player_1 = Player(room=self.room, name="connected 1")
            self.connected_player_1.save()
            ConnectionEvent.atomically_connect(self.connected_player_1)

            self.connected_player_2 = Player(room=self.room, name="connected 2")
            self.connected_player_2.save()
            ConnectionEvent.atomically_connect(self.connected_player_2)
            ConnectionEvent.atomically_disconnect(self.connected_player_2)
            ConnectionEvent.atomically_connect(self.connected_player_2)

            self.disconnected_player = Player(room=self.room, name="disconnected player")
            self.disconnected_player.save()
            ConnectionEvent.atomically_connect(self.disconnected_player)
            ConnectionEvent.atomically_disconnect(self.disconnected_player)

    def test_get_existing_room(self):
        room = Room.get_for_encoded_uuid(self.room.encoded_uuid)
        self.assertEqual(room.name, "TestRoom")

    def test_get_nonexist_room(self):
        self.assertRaises(Room.DoesNotExist, Room.get_for_encoded_uuid, "abcdefghijklmnopqrstuv")

    def test_get_listed_rooms(self):
        rooms = Room.get_listed_rooms()
        self.assertEqual(len(rooms), 1)
        # TODO: should the creator count if they haven't actually connected?
        self.assertEqual(len(rooms[0].connected_players), 3)
        self.assertEqual({p.name for p in rooms[0].connected_players}, {"the creator", "connected 1", "connected 2"})

        self.assertEqual(rooms[0].current_game.seed, 5678)


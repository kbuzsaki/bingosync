from django import test

import json

from . import models, forms

NO_ACTIVE_ROOMS_TEXT = "No active rooms right now"
MAKE_ROOM_BUTTON = '<input type="submit" class="form-control" value="Make Room" />'
JOIN_ROOM_BUTTON = '<input type="submit" class="form-control" value="Join Room" />'
BOARD_CONTAINER_HTML = '<div class="board-container">'

def filter_keys(d, keys):
    return dict((k, v) for k, v in d.items() if k in keys)

class HomeTestCase(test.TestCase):

    def setUp(self):
        self.room_form = forms.RoomForm({
            "room_name": "Test Room",
            "passphrase": "password",
            "nickname": "Bingoer",
            "game_type": str(models.GameType.ocarina_of_time.value),
            "lockout_mode": str(models.LockoutMode.lockout.value),
        })

    def test_home_empty(self):
        resp = self.client.get("/")
        self.assertContains(resp, NO_ACTIVE_ROOMS_TEXT)
        self.assertNotContains(resp, "<tr>", html=True)
        self.assertContains(resp, MAKE_ROOM_BUTTON, html=True)

    def test_home_create_room(self):
        self.assertTrue(self.room_form.is_valid())
        # test room creation
        create_resp = self.client.post("/", self.room_form.data, follow=True)
        self.assertContains(create_resp, "Test Room")
        self.assertContains(create_resp, BOARD_CONTAINER_HTML)
        self.assertNotContains(create_resp, JOIN_ROOM_BUTTON)

        room_url = create_resp.context["room"].get_absolute_url()

        # test that the creator is redirected properly
        creator_resp = self.client.get(room_url)
        self.assertContains(creator_resp, "Test Room")
        self.assertContains(creator_resp, BOARD_CONTAINER_HTML)
        self.assertNotContains(creator_resp, JOIN_ROOM_BUTTON)

        # test that a new user gets the join screen
        new_resp = test.Client().get(room_url)
        self.assertContains(new_resp, "Test Room")
        self.assertNotContains(new_resp, BOARD_CONTAINER_HTML)
        self.assertContains(new_resp, JOIN_ROOM_BUTTON, html=True)

    def test_home_one_room(self):
        # test home page when one room already exists
        if not self.room_form.is_valid():
            self.fail("form error: " + repr(self.room_form.errors))
        room = self.room_form.create_room()
        resp = self.client.get("/")
        self.assertNotContains(resp, "No active rooms right now")
        room_td = '<td><a href="' + room.get_absolute_url() + '">Test Room</a></td>'
        self.assertContains(resp, room_td)
        self.assertContains(resp, MAKE_ROOM_BUTTON, html=True)

class CustomTestCase(test.TestCase):

    def setUp(self):
        self.numeric_goals = [
            {"name": "goal 1" }, {"name": "goal 2" }, {"name": "goal 3" }, {"name": "goal 4" }, {"name": "goal 5" },
            {"name": "goal 6" }, {"name": "goal 7" }, {"name": "goal 8" }, {"name": "goal 9" }, {"name": "goal 10"},
            {"name": "goal 11"}, {"name": "goal 12"}, {"name": "goal 13"}, {"name": "goal 14"}, {"name": "goal 15"},
            {"name": "goal 16"}, {"name": "goal 17"}, {"name": "goal 18"}, {"name": "goal 19"}, {"name": "goal 20"},
            {"name": "goal 21"}, {"name": "goal 22"}, {"name": "goal 23"}, {"name": "goal 24"}, {"name": "goal 25"}]

    def make_room_with_custom_json(self, **overrides):
        args = {
            "room_name": "Test Room",
            "passphrase": "password",
            "nickname": "Bingoer",
            "game_type": str(models.GameType.custom.value),
            "lockout_mode": str(models.LockoutMode.lockout.value),
            "custom_json": "",
        }
        args.update(overrides)
        custom_room_form = forms.RoomForm(args)

        return self.client.post("/", custom_room_form.data, follow=True)

    def test_basic_custom(self):
        custom_goals = self.numeric_goals
        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(custom_goals))
        game = create_resp.context["room"].current_game

        board_goals = [filter_keys(square, ["name"]) for square in game.board]
        self.assertEqual(board_goals, custom_goals)

    def test_random_custom(self):
        self.maxDiff = 100000
        custom_goals = self.numeric_goals
        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(custom_goals),
                variant_type=str(models.GameType.custom_randomized.value),
                seed="1234")
        game = create_resp.context["room"].current_game

        board_goals = [filter_keys(square, ["name"]) for square in game.board]
        self.assertNotEqual(board_goals, custom_goals)
        self.assertEqual(set(tuple(goal.items()) for goal in board_goals),
                         set(tuple(goal.items()) for goal in custom_goals))
        self.assertEqual(board_goals, [
            {"name": "goal 9" }, {"name": "goal 11"}, {"name": "goal 25"}, {"name": "goal 10"}, {"name": "goal 3" },
            {"name": "goal 14"}, {"name": "goal 21"}, {"name": "goal 12"}, {"name": "goal 15"}, {"name": "goal 20"},
            {"name": "goal 16"}, {"name": "goal 24"}, {"name": "goal 17"}, {"name": "goal 7" }, {"name": "goal 4" },
            {"name": "goal 18"}, {"name": "goal 22"}, {"name": "goal 23"}, {"name": "goal 13"}, {"name": "goal 5" },
            {"name": "goal 2" }, {"name": "goal 19"}, {"name": "goal 6" }, {"name": "goal 8" }, {"name": "goal 1"}])


    def test_invalid_json(self):
        create_resp = self.make_room_with_custom_json(custom_json="foo")
        self.assertContains(create_resp, "Invalid Board Json")

    def test_invalid_not_list(self):
        create_resp = self.make_room_with_custom_json(custom_json='{"some_dict": "value"}')
        self.assertContains(create_resp, "Board must be a list")

    def test_invalid_length(self):
        custom_goals = list(self.numeric_goals)
        del custom_goals[-1]
        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "must have exactly 25 goals (found 24)")

    def test_invalid_missing_name(self):
        # pretend there's a typo
        custom_goals = list(self.numeric_goals)
        del custom_goals[2]["name"]
        custom_goals[2]["naem"] = "foo"

        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "Square 3 ({&quot;naem&quot;: &quot;foo&quot;}) is missing a &quot;name")

    def test_invalid_empty_name(self):
        # pretend there's an empty name
        custom_goals = list(self.numeric_goals)
        custom_goals[2]["name"] = ""

        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "Square 3 ({&quot;name&quot;: &quot;&quot;}) has an empty &quot;name")

class ApiTestCase(test.TestCase):

    def test_join_room_api(self):
        # create a room to join
        room_resp = self.client.post("/", {
            "room_name": "Test Room",
            "passphrase": "test password",
            "nickname": "Bingoer",
            "game_type": str(models.GameType.ocarina_of_time.value),
            "lockout_mode": str(models.LockoutMode.lockout.value),
        }, follow=True)

        room_encoded_uuid = room_resp.context["room"].encoded_uuid

        # join the room via api, expect to get redirected to the socket key endpoint
        join_room_resp = self.client.post("/api/join-room", json.dumps({
            "room": room_encoded_uuid,
            "nickname": "other user",
            "password": "test password",
        }), content_type="application/json", follow=True)
        self.assertTrue("socket_key" in join_room_resp.json())

        # request a socket key explicitly as well
        socket_key_resp = self.client.get("/api/get-socket-key/" + room_encoded_uuid)
        self.assertTrue("socket_key" in socket_key_resp.json())
        socket_key = socket_key_resp.json()["socket_key"]

        # check that the socket key is valid
        check_socket_key_resp = self.client.get("/api/socket/" + socket_key)
        self.assertEqual(check_socket_key_resp.status_code, 200)

    def test_join_room_api_wrong_password(self):
        # create a room to join
        room_resp = self.client.post("/", {
            "room_name": "Test Room",
            "passphrase": "test password",
            "nickname": "Bingoer",
            "game_type": str(models.GameType.ocarina_of_time.value),
            "lockout_mode": str(models.LockoutMode.lockout.value),
        }, follow=True)

        room_encoded_uuid = room_resp.context["room"].encoded_uuid

        # try to join the room via api, but give the wrong password
        join_room_resp = self.client.post("/api/join-room", json.dumps({
            "room": room_encoded_uuid,
            "nickname": "other user",
            "password": "wrong password",
        }), content_type="application/json", follow=True)
        self.assertContains(join_room_resp, "Incorrect Password", status_code=400)


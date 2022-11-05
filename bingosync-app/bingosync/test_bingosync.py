from django import test

import json

from bingosync import models, forms, generators

NO_ACTIVE_ROOMS_TEXT = "No active rooms right now"
MAKE_ROOM_BUTTON = '<input type="submit" class="form-control" value="Make Room" />'
JOIN_ROOM_BUTTON = '<input type="submit" class="form-control" value="Join Room" />'
BOARD_CONTAINER_HTML = '<div class="board-container">'

TEST_GAME_TYPE = models.GameType.celeste

def filter_keys(d, keys):
    return dict((k, v) for k, v in d.items() if k in keys)

def inject_eval_generator_exception(generator, message=""):
    old_eval = generator.eval
    def new_eval(*args, **kwargs):
        generator.eval = old_eval
        raise generators.GeneratorException(message)
    generator.eval = new_eval

class HomeTestCase(test.TestCase):

    def setUp(self):
        self.room_form = forms.RoomForm({
            "room_name": "Test Room",
            "passphrase": "password",
            "nickname": "Bingoer",
            "game_type": str(TEST_GAME_TYPE.value),
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

    def test_home_create_room_timeout(self):
        inject_eval_generator_exception(TEST_GAME_TYPE.generator_instance(), "some error message")

        self.assertTrue(self.room_form.is_valid())
        # create room with expected generation error
        create_resp = self.client.post("/", self.room_form.data, follow=True)
        # assert that the old form values and error message are present
        self.assertContains(create_resp, "Test Room")
        self.assertContains(create_resp, "some error message")
        # assert that we're back on the create room page
        self.assertContains(create_resp, MAKE_ROOM_BUTTON, html=True)
        self.assertNotContains(create_resp, BOARD_CONTAINER_HTML)
        self.assertNotContains(create_resp, JOIN_ROOM_BUTTON)

        self.assertTrue(self.room_form.is_valid())
        # try again and succeed
        create_resp = self.client.post("/", self.room_form.data, follow=True)
        self.assertContains(create_resp, "Test Room")
        self.assertContains(create_resp, BOARD_CONTAINER_HTML)
        self.assertNotContains(create_resp, JOIN_ROOM_BUTTON)

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

        self.numeric_srl_goals = [
            [{"name": "goal 01a"}, {"name": "goal 01b"}],
            [{"name": "goal 02a"}, {"name": "goal 02b"}],
            [{"name": "goal 03a"}, {"name": "goal 03b"}],
            [{"name": "goal 04a"}, {"name": "goal 04b"}],
            [{"name": "goal 05a"}, {"name": "goal 05b"}],
            [{"name": "goal 06a"}, {"name": "goal 06b"}],
            [{"name": "goal 07a"}, {"name": "goal 07b"}],
            [{"name": "goal 08a"}, {"name": "goal 08b"}],
            [{"name": "goal 09a"}, {"name": "goal 09b"}],
            [{"name": "goal 10a"}, {"name": "goal 10b"}],
            [{"name": "goal 11a"}, {"name": "goal 11b"}],
            [{"name": "goal 12a"}, {"name": "goal 12b"}],
            [{"name": "goal 13a"}, {"name": "goal 13b"}],
            [{"name": "goal 14a"}, {"name": "goal 14b"}],
            [{"name": "goal 15a"}, {"name": "goal 15b"}],
            [{"name": "goal 16a"}, {"name": "goal 16b"}],
            [{"name": "goal 17a"}, {"name": "goal 17b"}],
            [{"name": "goal 18a"}, {"name": "goal 18b"}],
            [{"name": "goal 19a"}, {"name": "goal 19b"}],
            [{"name": "goal 20a"}, {"name": "goal 20b"}],
            [{"name": "goal 21a"}, {"name": "goal 21b"}],
            [{"name": "goal 22a"}, {"name": "goal 22b"}],
            [{"name": "goal 23a"}, {"name": "goal 23b"}],
            [{"name": "goal 24a"}, {"name": "goal 24b"}],
            [{"name": "goal 25a"}, {"name": "goal 25b"}]
        ]

        self.numeric_isaac_goals = [
            [{"name": "easy 1"}, {"name": "easy 2"}, {"name": "easy 3"}, {"name": "easy 4"}, {"name": "easy 5"},
             {"name": "easy 6"}, {"name": "easy 7"}, {"name": "easy 8"}, {"name": "easy 9"}, {"name": "easy 10"}],
            [{"name": "medium 1"}, {"name": "medium 2"}, {"name": "medium 3"}, {"name": "medium 4"}, {"name": "medium 5"},
             {"name": "medium 6"}, {"name": "medium 7"}, {"name": "medium 8"}, {"name": "medium 9"}, {"name": "medium 10"}],
            [{"name": "hard 1"}, {"name": "hard 2"}, {"name": "hard 3"}, {"name": "hard 4"}],
            [{"name": "very hard 1"}]]


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

    def test_srl_v5_custom(self):
        self.maxDiff = 100000
        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(self.numeric_srl_goals),
                variant_type=str(models.GameType.custom_srl_v5.value),
                seed="1234")
        game = create_resp.context["room"].current_game

        board_goals = [filter_keys(square, ["name"]) for square in game.board]
        self.assertEqual(board_goals, [
            {"name": "goal 02a"}, {"name": "goal 21a"}, {"name": "goal 14b"}, {"name": "goal 18b"}, {"name": "goal 10a"},
            {"name": "goal 19a"}, {"name": "goal 08b"}, {"name": "goal 05b"}, {"name": "goal 22a"}, {"name": "goal 11b"},
            {"name": "goal 25a"}, {"name": "goal 12b"}, {"name": "goal 16b"}, {"name": "goal 09b"}, {"name": "goal 03b"},
            {"name": "goal 06a"}, {"name": "goal 04b"}, {"name": "goal 23b"}, {"name": "goal 15a"}, {"name": "goal 17a"},
            {"name": "goal 13a"}, {"name": "goal 20a"}, {"name": "goal 07b"}, {"name": "goal 01b"}, {"name": "goal 24b"}])

    def test_isaac_custom(self):
        self.maxDiff = 100000
        create_resp = self.make_room_with_custom_json(custom_json=json.dumps(self.numeric_isaac_goals),
                variant_type=str(models.GameType.custom_isaac.value),
                seed="1234")
        game = create_resp.context["room"].current_game

        board_goals = [filter_keys(square, ["name"]) for square in game.board]
        self.assertEqual(board_goals, [
            {'name': 'medium 4'}, {'name': 'hard 2'}, {'name': 'easy 10'}, {'name': 'easy 10'}, {'name': 'medium 4'},
            {'name': 'hard 1'}, {'name': 'easy 6'}, {'name': 'medium 9'}, {'name': 'medium 5'}, {'name': 'easy 6'},
            {'name': 'easy 2'}, {'name': 'medium 8'}, {'name': 'very hard 1'}, {'name': 'medium 10'}, {'name': 'easy 7'},
            {'name': 'medium 5'}, {'name': 'easy 7'}, {'name': 'medium 10'}, {'name': 'easy 4'}, {'name': 'hard 1'},
            {'name': 'easy 4'}, {'name': 'medium 2'}, {'name': 'easy 8'}, {'name': 'hard 3'}, {'name': 'medium 8'}])

    def test_invalid_json(self):
        create_resp = self.make_room_with_custom_json(custom_json="foo")
        self.assertContains(create_resp, "Couldn't parse board json")

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

    def test_invalid_srl_num_tiers(self):
        custom_goals = list(self.numeric_srl_goals)[:24]

        create_resp = self.make_room_with_custom_json(variant_type=str(models.GameType.custom_srl_v5.value), custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "An SRL goal list must have exactly 25 tiers (found 24)")

    def test_invalid_srl_non_list_tier(self):
        custom_goals = self.numeric_srl_goals
        custom_goals[2] = {"foo": "bar"}

        create_resp = self.make_room_with_custom_json(variant_type=str(models.GameType.custom_srl_v5.value), custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "Element at difficulty tier 3 was not a list (found {&quot;foo&quot;: &quot;bar&quot;})")

    def test_invalid_srl_empty_tier(self):
        custom_goals = self.numeric_srl_goals
        custom_goals[2] = []

        create_resp = self.make_room_with_custom_json(variant_type=str(models.GameType.custom_srl_v5.value), custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "Goal list at difficulty tier 3 was empty")

    def test_invalid_srl_missing_name(self):
        custom_goals = self.numeric_srl_goals
        custom_goals[2][0] = {"naem": "foo"}

        create_resp = self.make_room_with_custom_json(variant_type=str(models.GameType.custom_srl_v5.value), custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "Goal 1 ({&quot;naem&quot;: &quot;foo&quot;}) in difficulty tier 3 is missing a &quot;name&quot; attribute")

    def test_invalid_srl_empty_name(self):
        custom_goals = self.numeric_srl_goals
        custom_goals[2][0] = {"name": ""}

        create_resp = self.make_room_with_custom_json(variant_type=str(models.GameType.custom_srl_v5.value), custom_json=json.dumps(custom_goals))
        self.assertContains(create_resp, "Goal 1 ({&quot;name&quot;: &quot;&quot;}) in difficulty tier 3 has an empty &quot;name&quot; attribute")


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


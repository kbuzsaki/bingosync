import tornado.ioloop
import tornado.web
import tornado.websocket
from tornado.httpclient import AsyncHTTPClient

from collections import defaultdict
import datetime
import json
import random
import requests
import pprint

BASE_DJANGO_URL = "http://localhost:8000/"
BASE_API_URL = BASE_DJANGO_URL + "api/"

SOCKET_VERIFICATION_URL = BASE_API_URL + "socket/"
CONNECTION_URL = BASE_API_URL + "connected/"
DISCONNECTION_URL = BASE_API_URL + "disconnected/"

PING_PERIOD_SECONDS = 5
PING_PERIOD_MILLIS = PING_PERIOD_SECONDS * 1000
TIMEOUT_THRESHOLD = datetime.timedelta(seconds=60)

DEFAULT_RETRY_COUNT = 5

# whether we should clean up the broadcast sockets dictionary as people disconnect
CLEANUP_SOCKETS_DICT_ON_DISCONNECT = True

def load_player_data(socket_key):
    response = requests.get(SOCKET_VERIFICATION_URL + socket_key)
    response_json = response.json()
    room_uuid = response_json["room"]
    player_uuid = response_json["player"]
    return room_uuid, player_uuid

def post_player_connection(player_uuid):
    ping_with_retry(CONNECTION_URL + player_uuid)

def post_player_disconnection(player_uuid):
    ping_with_retry(DISCONNECTION_URL + player_uuid)

def ping_with_retry(url, retry_count=DEFAULT_RETRY_COUNT):
    def retry_callback(response):
        if response.error:
            print("Response error:", response.error, "for url:", url)
            print("Retries left:", retry_count - 1)
            ping_with_retry(url, retry_count - 1)

    if retry_count <= 0:
        print("Ran out of retries, for url '" + url + "', giving up.")
        return

    client = AsyncHTTPClient()
    client.fetch(url, retry_callback)

def format_defaultdict(ddict):
    if isinstance(ddict, defaultdict):
        return {key: format_defaultdict(ddict[key]) for key in ddict}
    else:
        return ddict

class SocketRouter:

    def __init__(self):
        self.sockets_by_room = defaultdict(lambda: defaultdict(set))

    @property
    def all_sockets(self):
        for room_sockets in self.sockets_by_room.values():
            for player_sockets in room_sockets.values():
                for socket in player_sockets:
                    yield socket

    def log_sockets(self, message=None):
        if message:
            print(message)
        pprint.pprint(format_defaultdict(self.sockets_by_room))
        print()

    def send_all(self, message):
        print("sending message:", repr(message), "to", len(list(self.all_sockets)), "sockets")
        for socket in self.all_sockets:
            try:
                socket.send(message)
            except:
                pass

    def ping_all(self):
        for socket in list(self.all_sockets):
            try:
                socket.ping("boop".encode("utf8"))
            except tornado.websocket.WebSocketClosedError:
                print("pinged socket that was already closed, unregistering", socket)
                self.unregister(socket)

    def kill_dead_sockets(self):
        threshold = datetime.datetime.now() - TIMEOUT_THRESHOLD
        for socket in self.all_sockets:
            if socket.last_pong < threshold:
                print("closing dead socket:", socket)
                try:
                    socket.close()
                except tornado.websocket.WebSocketClosedError:
                    print("socket already closed, attempting to unregister", socket)
                    self.unregister(socket)

    def send_to_room(self, room_uuid, message):
        room_sockets = self.sockets_by_room[room_uuid]
        for player_sockets in room_sockets.values():
            for socket in player_sockets:
                socket.send(message)

    def register(self, room_uuid, player_uuid, socket):
        self.log_sockets("registering socket...")
        # don't post new player if it's from a public view that has no uuid
        if not self.sockets_by_room[room_uuid][player_uuid] and not player_uuid == '':
            print("posting connect")
            post_player_connection(player_uuid)
        self.sockets_by_room[room_uuid][player_uuid].add(socket)
        self.log_sockets("registered")

    def unregister(self, socket):
        self.log_sockets("unregistering socket...")
        for room_uuid in self.sockets_by_room:
            room_sockets = self.sockets_by_room[room_uuid]
            for player_uuid in room_sockets:
                player_sockets = room_sockets[player_uuid]
                if player_sockets:
                    player_sockets.discard(socket)
                    if not player_sockets:
                        if not player_uuid == '':
                            print("posting disconnect", player_uuid)
                            post_player_disconnection(player_uuid)
                        if CLEANUP_SOCKETS_DICT_ON_DISCONNECT:
                            del room_sockets[player_uuid]
                            break
            if not room_sockets:
                if CLEANUP_SOCKETS_DICT_ON_DISCONNECT:
                    print("room closed:", room_uuid)
                    del self.sockets_by_room[room_uuid]
                    break
        self.log_sockets("unregistered")

ROUTER = SocketRouter()

class MainHandler(tornado.web.RequestHandler):

    def get(self):
        self.write("Hello, world")

    def put(self):
        data = json.loads(self.request.body.decode("utf8"))
        room_uuid = data["room"]
        ROUTER.send_to_room(room_uuid, data)


class ConnectedHandler(tornado.web.RequestHandler):

    def get(self):
        data = {room: list(players.keys()) for room, players in ROUTER.sockets_by_room.items()}
        self.write(json.dumps(data))


class BroadcastWebSocket(tornado.websocket.WebSocketHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.last_pong = datetime.datetime.now()

    def __repr__(self):
        return "Socket(" + str(self.last_pong) + ")"

    def check_origin(self, origin):
        return True

    def send(self, message):
        try:
            self.write_message(message)
        except tornado.websocket.WebSocketClosedError:
            self.close()

    def on_pong(self, data):
        self.last_pong = datetime.datetime.now()

    def on_message(self, message):
        try:
            message_dict = json.loads(message)
            socket_key = message_dict["socket_key"]
            room_uuid, player_uuid = load_player_data(socket_key)
            ROUTER.register(room_uuid, player_uuid, self)
        except:
            self.send('{"type": "error", "error": "unable to authenticate, try refreshing"}')

    def on_close(self):
        ROUTER.unregister(self)

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/connected", ConnectedHandler),
    (r"/broadcast", BroadcastWebSocket)
])

PORT = 8888

def periodic_ping():
    ROUTER.ping_all()
    ROUTER.kill_dead_sockets()

if __name__ == "__main__":
    print("Starting application!")
    print("Listening on port: " + str(PORT))
    application.listen(PORT)
    io_loop = tornado.ioloop.IOLoop.current()
    pinger = tornado.ioloop.PeriodicCallback(periodic_ping, PING_PERIOD_MILLIS)
    pinger.start()
    io_loop.start()

import tornado.ioloop
import tornado.web
import tornado.websocket
from tornado.httpclient import AsyncHTTPClient

from collections import defaultdict
import datetime
import json
import random
import requests

BASE_DJANGO_URL = "http://localhost:8000/"
BASE_API_URL = BASE_DJANGO_URL + "api/"

SOCKET_VERIFICATION_URL = BASE_API_URL + "socket/"
CONNECTION_URL = BASE_API_URL + "connected/"
DISCONNECTION_URL = BASE_API_URL + "disconnected/"

def load_player_data(socket_key):
    response = requests.get(SOCKET_VERIFICATION_URL + socket_key)
    response_json = response.json()
    room_uuid = response_json["room"]
    player_uuid = response_json["player"]
    return room_uuid, player_uuid

def post_player_connection(player_uuid):
    client = AsyncHTTPClient()
    client.fetch(CONNECTION_URL + player_uuid)

def post_player_disconnection(player_uuid):
    client = AsyncHTTPClient()
    client.fetch(DISCONNECTION_URL + player_uuid)

class SocketRouter:

    def __init__(self):
        self.all_sockets = set()
        self.sockets_by_room = defaultdict(lambda: defaultdict(list))

    def send_all(self, message):
        print("sending message:", repr(message), "to", len(self.all_sockets), "sockets")
        for socket in self.all_sockets:
            try:
                socket.write_message(message)
            except:
                pass

    def ping_all(self):
        self.send_all({"type": "ping", "timestamp": datetime.datetime.now().isoformat() })

    def send_to_room(self, room_uuid, message):
        room_sockets = self.sockets_by_room[room_uuid]
        for player_sockets in room_sockets.values():
            for socket in player_sockets:
                socket.write_message(message)

    def register(self, room_uuid, player_uuid, socket):
        print("registering socket...", dict(self.sockets_by_room))
        if not self.sockets_by_room[room_uuid][player_uuid]:
            print("posting connect")
            post_player_connection(player_uuid)
        self.sockets_by_room[room_uuid][player_uuid].append(socket)
        self.all_sockets.add(socket)
        print("registered", dict(self.sockets_by_room))

    def unregister(self, socket):
        print("unregistering socket...", dict(self.sockets_by_room))
        for room_uuid in self.sockets_by_room:
            room_sockets = self.sockets_by_room[room_uuid]
            for player_uuid in room_sockets:
                player_sockets = room_sockets[player_uuid]
                try:
                    player_sockets.remove(socket)
                    if not player_sockets:
                        print("posting disconnect")
                        post_player_disconnection(player_uuid)
                except:
                    pass
        self.all_sockets.remove(socket)
        print("unregistered", dict(self.sockets_by_room))

ROUTER = SocketRouter()

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

    def put(self):
        data = json.loads(self.request.body.decode("utf8"))
        room_uuid = data["room"]
        ROUTER.send_to_room(room_uuid, data)


class BroadcastWebSocket(tornado.websocket.WebSocketHandler):

    def check_origin(self, origin):
        return True

    def on_message(self, message):
        try:
            message_dict = json.loads(message)
            if message_dict.get("type") == "ping":
                return
            socket_key = message_dict["socket_key"]
            room_uuid, player_uuid = load_player_data(socket_key)
            ROUTER.register(room_uuid, player_uuid, self)
        except:
            self.write_message('{"type": "error", "error": "unable to authenticate, try refreshing"}')

    def on_close(self):
        ROUTER.unregister(self)

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/broadcast", BroadcastWebSocket)
])

PORT = 8888

def periodic_ping():
    ROUTER.ping_all()

if __name__ == "__main__":
    print("Starting application!")
    print("Listening on port: " + str(PORT))
    application.listen(PORT)
    io_loop = tornado.ioloop.IOLoop.current()
    pinger = tornado.ioloop.PeriodicCallback(periodic_ping, 5000)
    pinger.start()
    io_loop.start()

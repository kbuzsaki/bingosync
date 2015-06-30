import tornado.ioloop
import tornado.web
import tornado.websocket

import json
import random

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

    def put(self):
        data = json.loads(self.request.body.decode("utf8"))
        message = goal_message(data["square"], data["player"])
        BroadcastWebSocket.send_all(message)

class EchoWebSocket(tornado.websocket.WebSocketHandler):

    def check_origin(self, origin):
        return True

    def open(self):
        print("WebSocket opened")

    def on_message(self, message):
        self.write_message(u"You said: " + message)

    def on_close(self):
        print("WebSocket closed")

NAMES = ["John", "Sam", "Chris", "Alice", "Josie"]

def connection_message(text):
    return {
        "type": "connection",
        "text": text
    }

def connected_as_message(name):
    return connection_message("connected as '" + name + "'")

def connected_message(name):
    return connection_message(name + " connected")

def disconnected_message(name):
    return connection_message(name + " disconnected")

def chat_message(name, message):
    return {
        "type": "chat",
        "name": name,
        "text": message
    }

def goal_message(square, player):
    return {
        "type": "goal",
        "square": square,
        "player": player
    }

def name_message(name):
    return {
        "type": "name",
        "name": name
    }

class BroadcastWebSocket(tornado.websocket.WebSocketHandler):

    sockets = list()

    @staticmethod
    def get_name():
        remaining_names = [name for name in NAMES
                           if not any(socket.name == name for socket in BroadcastWebSocket.sockets)]
        return random.choice(remaining_names)

    @staticmethod
    def send_all(message):
        print("sending message:", repr(message), "to", len(BroadcastWebSocket.sockets), "sockets")
        for socket in BroadcastWebSocket.sockets:
            socket.write_message(message)

    def check_origin(self, origin):
        return True

    def open(self):
        self.name = BroadcastWebSocket.get_name()
        print("WebSocket opened:", self.name)
        BroadcastWebSocket.send_all(connected_message(self.name))
        self.write_message(name_message(self.name))
        self.write_message(connected_as_message(self.name))
        BroadcastWebSocket.sockets.append(self)

    def on_message(self, message):
        print("Received message: " + repr(message))
        data = json.loads(message)
        BroadcastWebSocket.send_all(chat_message(self.name, data["text"]))

    def on_close(self):
        print("WebSocket closed:", self.name)
        BroadcastWebSocket.sockets.remove(self)
        BroadcastWebSocket.send_all(disconnected_message(self.name))

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/echo", EchoWebSocket),
    (r"/broadcast", BroadcastWebSocket)
])

PORT = 8888

if __name__ == "__main__":
    print("Starting application!")
    print("Listening on port: " + str(PORT))
    application.listen(PORT)
    tornado.ioloop.IOLoop.current().start()

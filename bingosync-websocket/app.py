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
        goal = data["goal"]
        BroadcastWebSocket.send_all(goal)

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
        chat_message = "<i>" + self.name + " connected</i>"
        BroadcastWebSocket.send_all(chat_message)
        self.write_message("<i>connected as '" + self.name + "'</i>")
        print("WebSocket opened:", self.name)
        BroadcastWebSocket.sockets.append(self)

    def on_message(self, message):
        print("Received message: " + repr(message))
        data = json.loads(message)
        chat_message = "<b>" + self.name + "</b>: " + data["text"]
        BroadcastWebSocket.send_all(chat_message)

    def on_close(self):
        print("WebSocket closed:", self.name)
        chat_message = "<i>" + self.name + " disconnected</i>"
        BroadcastWebSocket.sockets.remove(self)
        BroadcastWebSocket.send_all(chat_message)

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

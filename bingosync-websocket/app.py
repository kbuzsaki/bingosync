import tornado.ioloop
import tornado.web
import tornado.websocket

import json

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

class BroadcastWebSocket(tornado.websocket.WebSocketHandler):

    sockets = list()

    @staticmethod
    def send_all(message):
        print("sending message:", message, "to", len(BroadcastWebSocket.sockets), "sockets")
        for socket in BroadcastWebSocket.sockets:
            socket.write_message(message)

    def check_origin(self, origin):
        return True

    def open(self):
        print("WebSocket opened")
        BroadcastWebSocket.sockets.append(self)

    def on_message(self, message):
        print("Sending message: " + str(message))
        BroadcastWebSocket.send_all(message)

    def on_close(self):
        print("WebSocket closed")
        BroadcastWebSocket.sockets.remove(self)

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

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
        BroadcastWebSocket.send_all(data)

class BroadcastWebSocket(tornado.websocket.WebSocketHandler):

    sockets = list()

    @staticmethod
    def send_all(message):
        print("sending message:", repr(message), "to", len(BroadcastWebSocket.sockets), "sockets")
        for socket in BroadcastWebSocket.sockets:
            socket.write_message(message)

    def check_origin(self, origin):
        return True

    def open(self):
        BroadcastWebSocket.sockets.append(self)

    def on_close(self):
        BroadcastWebSocket.sockets.remove(self)

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/broadcast", BroadcastWebSocket)
])

PORT = 8888

if __name__ == "__main__":
    print("Starting application!")
    print("Listening on port: " + str(PORT))
    application.listen(PORT)
    tornado.ioloop.IOLoop.current().start()

import requests
import json

from .settings import SOCKETS_PUBLISH_URL

def publish_goal_event(goal_event):
    data = goal_event.to_json()
    _publish_json(data, goal_event.player.room)

def publish_chat_event(chat_event):
    data = chat_event.to_json()
    _publish_json(data, chat_event.player.room)

def publish_color_event(color_event):
    data = color_event.to_json()
    _publish_json(data, color_event.player.room)

def publish_connection_event(connection_event):
    data = connection_event.to_json()
    _publish_json(data, connection_event.player.room)

def _publish_json(data, room):
    data["room"] = room.encoded_uuid
    requests.put(SOCKETS_PUBLISH_URL, data=json.dumps(data))


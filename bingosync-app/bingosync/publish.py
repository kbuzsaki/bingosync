import requests
import json

from .settings import SOCKETS_PUBLISH_URL

def publish_goal_event(goal_event):
    data = goal_event.to_json()
    _publish_json(data)

def publish_chat_event(chat_event):
    data = chat_event.to_json()
    _publish_json(data)

def publish_color_event(color_event):
    data = color_event.to_json()
    _publish_json(data)

def publish_connection_event(connection_event):
    data = connection_event.to_json()
    _publish_json(data)

def _publish_json(data):
    requests.put(SOCKETS_PUBLISH_URL, data=json.dumps(data))


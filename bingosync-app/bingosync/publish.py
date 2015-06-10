import requests
import json

from .settings import SOCKET_URL

def publish_goal(name, goal, slot, color):
    data = {
        "name": name,
        "goal": goal,
        "slot": slot,
        "color": color
    }
    _publish_json(data)

def _publish_json(data):
    requests.put(SOCKET_URL, data=json.dumps(data))


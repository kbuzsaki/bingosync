import requests
import json

from .settings import SOCKETS_PUBLISH_URL

def publish_goal(name, goal, slot, color):
    data = {
        "name": name,
        "goal": goal,
        "slot": slot,
        "color": color
    }
    _publish_json(data)

def _publish_json(data):
    requests.put(SOCKETS_PUBLISH_URL, data=json.dumps(data))


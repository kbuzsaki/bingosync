import requests
import json

from .settings import SOCKET_URL

def publish_goal(name, goal):
    data = {
        "name": name,
        "goal": goal
    }
    _publish_json(data)

def _publish_json(data):
    requests.put(SOCKET_URL, data=json.dumps(data))


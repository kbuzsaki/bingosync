import requests
import json

from .settings import SOCKET_URL

def publish_goal(goal):
    data = {
        "goal": goal
    }
    _publish_json(data)

def _publish_json(data):
    requests.put(SOCKET_URL, data=json.dumps(data))


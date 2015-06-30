import requests
import json

from .settings import SOCKETS_PUBLISH_URL

def publish_goal_event(goal_event):
    data = {
        "name": goal_event.player.name,
        "goal": goal_event.square.goal,
        "slot": goal_event.square.slot_name,
        "color": goal_event.color.name
    }
    _publish_json(data)

def _publish_json(data):
    requests.put(SOCKETS_PUBLISH_URL, data=json.dumps(data))


from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

import json

from .bingo_generator import BingoGenerator
from .publish import publish_goal


def index(request):
    return HttpResponse("Hello, world.")

def board_view(request, seed):
    return render(request, "bingosync/bingosync.html", {"seed": seed})

def board_json(request, seed):
    generator = BingoGenerator.instance()
    card = generator.get_card(seed)
    return JsonResponse(card, safe=False)

@csrf_exempt
def goal_selected(request):
    data = json.loads(request.body.decode("utf8"))
    name = data["name"]
    goal = data["goal"]
    slot = data["slot"]
    color = data["color"]
    publish_goal(name, goal, slot, color)
    return HttpResponse("Got goal: " + goal)


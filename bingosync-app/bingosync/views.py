from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json

from .bingo_generator import BingoGenerator


def index(request):
    return HttpResponse("Hello, world.")

def board_view(request, seed):
    return render(request, "board.html", {"seed": seed})

def board_json(request, seed):
    generator = BingoGenerator.instance()
    card = generator.get_card(seed)
    return JsonResponse(card, safe=False)

@csrf_exempt
def goal_selected(request):
    data = json.loads(request.body.decode("utf8"))
    return HttpResponse("Got goal: " + data["goal"])


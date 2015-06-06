from django.http import HttpResponse, JsonResponse

from .bingo_generator import BingoGenerator


def index(request):
    return HttpResponse("Hello, world.")

def board_view(request, seed):
    return HttpResponse("You requested a board for seed: " + str(seed))

def board_json(request, seed):
    generator = BingoGenerator.instance()
    card = generator.get_card(seed)
    return JsonResponse(card, safe=False)


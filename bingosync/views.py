from django.http import HttpResponse, JsonResponse

from .bingo_generator import BingoGenerator


def index(request):
    return HttpResponse("Hello, world.")

def board_json(request, seed):
    generator = BingoGenerator.instance()
    card = generator.get_card(seed)
    return JsonResponse(card, safe=False)


from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Generates a card for a game'

    def add_arguments(self, parser):
        parser.add_argument("-o", dest="filename", default="stats.csv", help="File to output to")

    def handle(self, *args, **options):
        filename = options["filename"]

        counts = get_counts_by_game_by_day()
        counts = group_counts_by_month(counts)
        counts = compute_cumulative_counts(counts)
        print_data(sort_columns(format_counts_as_rows(counts)), filename)


import csv
import datetime
from collections import defaultdict
from collections import Counter

from bingosync import models

def get_counts_by_game_by_day():
    counts_by_game_by_day = defaultdict(lambda: defaultdict(int))
    games = models.Game.objects.all()
    print("found", len(games), "games")
    num_processed = 0
    for game in games:
        num_processed += 1
        if num_processed % 1000 == 0:
            print("processed:", num_processed)
        if len(game.room.players) < 2:
            continue
        counts_by_game_by_day[game.created_date.date()][game.game_type.group] += len(game.room.players)
    return counts_by_game_by_day

def group_counts_by_month(counts_by_game_by_day):
    counts_by_game_by_month = defaultdict(lambda: defaultdict(int))
    for day, counts_by_game in counts_by_game_by_day.items():
        month = datetime.date(day.year, day.month, 1)
        for game, count in counts_by_game.items():
            counts_by_game_by_month[month][game] += count
    return counts_by_game_by_month

def format_counts(game_counts):
    return [str(game_counts[gt]) for gt in models.GameType]


def compute_cumulative_counts(counts_by_game_by_period):
    cumulative_counts_by_game_by_period = defaultdict(lambda: defaultdict(int))
    game_counts = defaultdict(int)
    for period in sorted(counts_by_game_by_period):
        for gt, count in counts_by_game_by_period[period].items():
            game_counts[gt] += count
        for gt, count in game_counts.items():
            cumulative_counts_by_game_by_period[period][gt] = count
    return cumulative_counts_by_game_by_period


def format_counts_as_rows(counts_by_game_by_period):
    rows = []
    for period in sorted(counts_by_game_by_period):
        row = [str(period)] + format_counts(counts_by_game_by_period[period])
        rows.append(row)
    return rows


def sort_columns(rows):
    last_row = rows[-1][1:]
    last_row_index_vals = list(enumerate(last_row))
    key=lambda p: int(p[1])
    key=lambda p: sum(map(int, (row[p[0]+1] for row in rows)))
    sorted_last_row_index_vals = sorted(last_row_index_vals, key=key, reverse=True)
    sort_indexes = [index_val[0] for index_val in sorted_last_row_index_vals]
    shuffle = lambda r: [r[sort_indexes[i]] for i in range(len(r))]
    header = ["date"] + [str(gt) for gt in models.GameType]
    rows = [header] + rows
    return [[row[0]] + shuffle(row[1:]) for row in rows]

def print_data(rows, filename):
    with open(filename, "w") as outfile:
        w = csv.writer(outfile)
        for row in rows:
            w.writerow(row)

from collections import defaultdict
import json
import csv
from urllib.request import urlopen
import os
import traceback
import re
from io import StringIO

WATERSKULLS = "waterskulls"
NOT_WATERSKULLS = "not_waterskulls"
OUTPUT_TYPE = NOT_WATERSKULLS

class ValueColumn:

    def __init__(self, *path):
        self.path = path

    @property
    def included(self):
        return True

class StringColumn(ValueColumn):

    def parse_value(self, value):
        return value

class IntegerColumn(ValueColumn):

    def parse_value(self, value):
        return int(value)

class FloatColumn(ValueColumn):

    def parse_value(self, value):
        return float(value)

class BooleanColumn(ValueColumn):

    def parse_value(self, value):
        if value.lower() in ("true", "yes", "y"):
            return True
        elif value.lower() in ("false", "no", "n"):
            return False
        else:
            raise ValueError("Couldn't parse value '" + str(value) + "' as boolean")

class Ignore:

    def __init__(self, name):
        self.name = name

    @property
    def included(self):
        return False

SCHEMA = [
    Ignore("updated"),
    StringColumn("payload", "name"),
    StringColumn("payload", "jp"),
    IntegerColumn("difficulty"),
    FloatColumn("time"),
    StringColumn("skill"),
    BooleanColumn("child"),
    BooleanColumn("bottle"),
    BooleanColumn("hookshot"),
]

NON_ID_CHARACTERS_PATTERN = re.compile(r"[^A-Za-z0-9]+")

def id_from_name(name):
    return NON_ID_CHARACTERS_PATTERN.sub("-", name.lower())

def id_from_goal(goal):
    return goal["id"] if "id" in goal else id_from_name(goal["payload"]["name"])

def set_deep(dictionary, keys, value):
    path_keys = keys[:-1]
    last_key = keys[-1]
    for path_key in path_keys:
        if path_key not in dictionary:
            dictionary[path_key] = dict()
        dictionary = dictionary[path_key]
    dictionary[last_key] = value

def parse_goal(col_details):
    goal = {}
    for col, detail in col_details:
        set_deep(goal, col.path, col.parse_value(detail))
    return goal

def row_to_dict(synergy_header, row):
    detail_cols = row[:len(SCHEMA)]
    synergy_cols = row[len(SCHEMA):]

    goal = parse_goal([(col, detail) for col, detail in zip(SCHEMA, detail_cols) if col.included])
    goal["id"] = id_from_goal(goal)

    types = dict()
    subtypes = dict()
    for synergy_name, synergy in zip(synergy_header, synergy_cols):
        if synergy:
            if synergy.startswith("*"):
                subtypes[synergy_name] = float(synergy[1:])
            else:
                types[synergy_name] = float(synergy)

    # all goals have types
    goal["types"] = types
    # only include the subtypes dict if we have subtypes
    if subtypes:
        goal["subtypes"] = subtypes

    return goal


def rows_to_dict(header, rows):
    synergy_header = header[len(SCHEMA):]

    goals = {
        "cardType": "difficulty-synergy",
        "items": []
    }

    # compatibility line
    if OUTPUT_TYPE == NOT_WATERSKULLS:
        goals_by_difficulty = [list() for _ in range(26)]

    for row in rows:
        try:
            if any(col for col in row):
                goal = row_to_dict(synergy_header, row)
                goals["items"].append(goal)

                # compatibility lines
                if OUTPUT_TYPE == NOT_WATERSKULLS:
                    goal["name"] = goal["payload"]["name"]
                    goal["jp"] = goal["payload"]["jp"]
                    difficulty = goal["difficulty"]
                    goals_by_difficulty[difficulty].append(goal)
            else:
                break
        except Exception as e:
            raise RowConversionException(row)

    # compatibility lines
    if OUTPUT_TYPE == NOT_WATERSKULLS:
        goals = goals_by_difficulty

    return goals

class ConversionException(Exception):
    pass

class RowConversionException(ConversionException):

    def __init__(self, row):
        self.row = row

def csv_to_json(csv_file):
    reader = csv.reader(csv_file)
    header = next(reader)
    rows = list(reader)

    json_dict = rows_to_dict(header, rows)
    json_str = json.dumps(json_dict, sort_keys = True, indent = 4, ensure_ascii=False)

    return json_str

BASE_URL = "https://docs.google.com/spreadsheet/ccc"
DEFAULT_DOWNLOAD_URL = BASE_URL + "?key=1dRpwfIV2vDRL_Hq-pBj3U7wq7XwZ9JPW9Ac8hK5qbgc&output=csv"

def download_goal_csv():
    data = urlopen(DEFAULT_DOWNLOAD_URL).read().decode('utf-8')
    return StringIO(data)

def get_converted_goal_list(csv_file=None):
    try:
        if not csv_file:
            csv_file = download_goal_csv()
        return csv_to_json(csv_file)
    except Exception as e:
        raise ConversionException(e)

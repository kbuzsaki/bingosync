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
    StringColumn("name"),
    StringColumn("jp"),
    IntegerColumn("difficulty"),
    FloatColumn("time"),
    StringColumn("skill"),
    #BooleanColumn("child"),
    #BooleanColumn("bottle"),
    #BooleanColumn("hookshot"),
]

NON_ID_CHARACTERS_PATTERN = re.compile(r"[^A-Za-z0-9]+")

def id_from_name(name):
    return NON_ID_CHARACTERS_PATTERN.sub("-", name.lower())

def id_from_goal(goal):
    return goal["id"] if "id" in goal else id_from_name(goal["name"])

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

def parse_synergy(synergy):
    old_synergy = synergy
    if synergy.startswith("*"):
        synergy = synergy[1:]

    try:
        return float(synergy)
    except ValueError:
        if synergy.lower() in ("true", "yes"):
            return "yes"
        elif synergy.lower() in ("false", "no"):
            return "no"
        else:
            raise Exception("Failed to parse synergy value: " + repr(old_synergy))

def row_to_dict(synergy_header, row):
    detail_cols = row[:len(SCHEMA)]
    synergy_cols = row[len(SCHEMA):]

    goal = parse_goal([(col, detail) for col, detail in zip(SCHEMA, detail_cols) if col.included])
    goal["id"] = id_from_goal(goal)

    types = dict()
    subtypes = dict()
    rowtypes = dict()
    for synergy_name, synergy in zip(synergy_header, synergy_cols):
        if synergy:
            synergy_value = parse_synergy(synergy)
            # 'row synergy'
            if synergy_name.startswith("*"):
                rowtypes[synergy_name[1:]] = synergy_value
            # 'subtype' goal synergy
            elif synergy.startswith("*"):
                subtypes[synergy_name] = synergy_value
            # 'normal' goal synergy
            else:
                types[synergy_name] = synergy_value

    # all goals have types
    goal["types"] = types
    # only include the subtypes dict if we have subtypes
    if subtypes:
        goal["subtypes"] = subtypes
    # only include the rowtypes dict if we have subtypes
    if rowtypes:
        goal["rowtypes"] = rowtypes
        if "child" in rowtypes:
            goal["child"] = rowtypes["child"]

    return goal


def rows_to_dict(header, rows):
    synergy_header = header[len(SCHEMA):]

    goals = {
        "cardType": "difficulty-synergy",
        "items": []
    }

    # compatibility line
    if OUTPUT_TYPE == NOT_WATERSKULLS:
        goals_by_difficulty = {str(difficulty): list() for difficulty in range(1, 26)}
        goals_by_difficulty["info"] = {"version": "v9 beta"}

    for row in rows:
        try:
            if any(col for col in row):
                goal = row_to_dict(synergy_header, row)
                goals["items"].append(goal)

                # compatibility lines
                if OUTPUT_TYPE == NOT_WATERSKULLS:
                    #goal["name"] = goal["payload"]["name"]
                    #goal["jp"] = goal["payload"]["jp"]
                    difficulty = goal["difficulty"]
                    goals_by_difficulty[str(difficulty)].append(goal)
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

def download_goal_csv(download_url=None):
    if not download_url:
        download_url = DEFAULT_DOWNLOAD_URL
    data = urlopen(download_url).read().decode('utf-8')
    return StringIO(data)

def get_converted_goal_list(csv_file=None):
    try:
        if not csv_file:
            csv_file = download_goal_csv()
        return csv_to_json(csv_file)
    except Exception as e:
        raise ConversionException(e)

def download_and_get_converted_goal_list(download_url=None):
    return get_converted_goal_list(download_goal_csv(download_url))

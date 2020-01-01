from django.db import models

import re
import logging

FILLER_WORD = "bingo"

class FilteredPattern(models.Model):
    pattern = models.CharField(max_length=255)

    @staticmethod
    def filter_string(string):
        filtered_patterns = FilteredPattern.objects.all()

        for filtered_pattern in filtered_patterns:
            try:
                filtered_regex = re.compile(filtered_pattern.pattern, re.IGNORECASE)
                string = filtered_regex.sub(FILLER_WORD, string)
            except Exception as e:
                logging.exception("Regex pattern: " + filtered_pattern.pattern)

        return string


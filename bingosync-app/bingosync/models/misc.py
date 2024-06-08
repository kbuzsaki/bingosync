from django.db import models

from enum import Enum, unique
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

@unique
class NoticeType(Enum):
    notice = 1
    announcement = 2
    warning = 3
    error = 4

    def __str__(self):
        return self.name.capitalize()

    @staticmethod
    def for_value(value):
        return list(NoticeType)[value - 1]

    @staticmethod
    def choices():
        return [(t.value, str(t)) for t in NoticeType]

class SiteNotice(models.Model):
    notice_type = models.IntegerField(choices=NoticeType.choices())
    visible_to_users = models.BooleanField(default=False)
    visible_to_admins = models.BooleanField(default=False)
    header = models.TextField(blank=True)
    body = models.TextField(blank=True)

    @staticmethod
    def user_visible_notices():
        visible = list(SiteNotice.objects.filter(visible_to_users=True))
        visible.sort(key=lambda notice: notice.notice_type)
        return visible

    @staticmethod
    def admin_visible_notices():
        visible = list(SiteNotice.objects.filter(visible_to_admins=True))
        visible.sort(key=lambda notice: notice.notice_type)
        return visible

    @staticmethod
    def notices_for_user(user):
        if user.is_staff:
            return SiteNotice.admin_visible_notices()
        else:
            return SiteNotice.user_visible_notices()

    def hide_from_all(self):
        self.visible_to_users = False
        self.visible_to_admins = False
        self.save()

    def show_to_admins_only(self):
        self.visible_to_users = False
        self.visible_to_admins = True
        self.save()

    def show_to_all_users(self):
        self.visible_to_users = True
        self.visible_to_admins = True
        self.save()

    def panel_css_class(self):
        if self.notice_type == NoticeType.notice.value:
            return "panel-primary"
        elif self.notice_type == NoticeType.announcement.value:
            return "panel-info"
        elif self.notice_type == NoticeType.warning.value:
            return "panel-warning"
        elif self.notice_type == NoticeType.error.value:
            return "panel-danger"
        return ""

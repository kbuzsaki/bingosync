# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from bingosync.models import CompositeColor, Color

def update_old_square_colors(apps, schema_editor):
    Square = apps.get_model('bingosync', Square)
    for square in Square.objects.all():
        composite_color = CompositeColor([Color.for_value(square.color_value)])
        square.color_value = composite_color.value
        square.save()

class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0014_auto_20160213_2047'),
    ]

    operations = [
        migrations.RunPython(update_old_square_colors),
    ]

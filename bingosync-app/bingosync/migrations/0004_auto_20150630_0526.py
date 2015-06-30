# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0003_player_uuid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goalevent',
            old_name='color',
            new_name='color_value',
        ),
    ]

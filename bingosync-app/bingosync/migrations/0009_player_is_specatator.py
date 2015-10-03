# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0008_game_game_type_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='is_spectator',
            field=models.BooleanField(default=False, verbose_name='Is Spectator'),
        ),
    ]


# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0009_player_is_specatator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='game_type_value',
            field=models.IntegerField(choices=[(1, 'Zelda: OoT'), (2, 'SM64'), (3, 'Zelda: MM'), (4, 'Super Metroid'), (5, 'CV: SotN'), (6, 'SMW'), (7, 'Poké Red/Blue'), (8, 'Poké Crystal'), (9, 'DK64'), (10, 'Pikmin'), (11, 'SMS'), (12, 'Poké Random')], verbose_name='Game Type'),
        ),
    ]

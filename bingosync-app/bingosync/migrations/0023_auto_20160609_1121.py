# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0022_auto_20160509_2053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='game_type_value',
            field=models.IntegerField(verbose_name='Game Type', choices=[(5, 'Castlevania: SotN'), (14, 'Crash Twinsanity'), (9, 'Donkey Kong 64'), (13, 'Final Fantasy 1'), (15, 'Lufia 2: Ancient Cave'), (10, 'Pikmin'), (8, 'Pokémon Crystal'), (7, 'Pokémon Red/Blue'), (12, 'Pokémon Red/Blue Random'), (2, 'Super Mario 64'), (11, 'Super Mario Sunshine'), (6, 'Super Mario World'), (4, 'Super Metroid'), (3, "Zelda: Majora's Mask"), (1, 'Zelda: Ocarina of Time')]),
        ),
    ]

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0018_merge'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='game_type_value',
            field=models.IntegerField(choices=[(1, 'Zelda: Ocarina of Time'), (2, 'Super Mario 64'), (3, "Zelda: Majora's Mask"), (4, 'Super Metroid'), (5, 'Castlevania: SotN'), (6, 'Super Mario World'), (7, 'Pokémon Red/Blue'), (8, 'Pokémon Crystal'), (9, 'Donkey Kong 64'), (10, 'Pikmin'), (11, 'Super Mario Sunshine'), (12, 'Pokémon Red/Blue Random'), (13, 'Final Fantasy 1'), (14, 'Crash Twinsanity')], verbose_name='Game Type'),
        ),
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(choices=[(21, 'Green Purple Red'), (25, 'Orange Purple Red'), (14, 'Blue Green Orange'), (27, 'Blue Orange Purple Red'), (28, 'Green Orange Purple'), (10, 'Blue Orange'), (4, 'Green'), (0, 'Blank'), (1, 'Red'), (16, 'Purple'), (13, 'Green Orange Red'), (12, 'Green Orange'), (17, 'Purple Red'), (24, 'Orange Purple'), (30, 'Blue Green Orange Purple'), (19, 'Blue Purple Red'), (3, 'Blue Red'), (23, 'Blue Green Purple Red'), (2, 'Blue'), (5, 'Green Red'), (6, 'Blue Green'), (15, 'Blue Green Orange Red'), (9, 'Orange Red'), (29, 'Green Orange Purple Red'), (8, 'Orange'), (20, 'Green Purple'), (22, 'Blue Green Purple'), (26, 'Blue Orange Purple'), (11, 'Blue Orange Red'), (7, 'Blue Green Red'), (31, 'Blue Green Orange Purple Red'), (18, 'Blue Purple')], default=0, verbose_name='Color'),
        ),
    ]

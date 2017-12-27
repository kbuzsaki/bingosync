# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0015_auto_20160213_2237'),
    ]

    operations = [
        migrations.CreateModel(
            name='RevealedEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('timestamp', models.DateTimeField(verbose_name='Sent', default=datetime.datetime.now)),
                ('player_color_value', models.IntegerField(choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')])),
                ('player', models.ForeignKey(to='bingosync.Player', on_delete=models.CASCADE)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AlterField(
            model_name='game',
            name='game_type_value',
            field=models.IntegerField(choices=[(1, 'Zelda: Ocarina of Time'), (2, 'Super Mario 64'), (3, "Zelda: Majora's Mask"), (4, 'Super Metroid'), (5, 'Castlevania: SotN'), (6, 'Super Mario World'), (7, 'Pokémon Red/Blue'), (8, 'Pokémon Crystal'), (9, 'Donkey Kong 64'), (10, 'Pikmin'), (11, 'Super Mario Sunshine'), (12, 'Pokémon Red/Blue Random'), (13, 'Final Fantasy 1')], verbose_name='Game Type'),
        ),
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(choices=[(2, 'Blue'), (25, 'Orange Purple Red'), (27, 'Blue Orange Purple Red'), (8, 'Orange'), (29, 'Green Orange Purple Red'), (6, 'Blue Green'), (13, 'Green Orange Red'), (3, 'Blue Red'), (23, 'Blue Green Purple Red'), (17, 'Purple Red'), (18, 'Blue Purple'), (12, 'Green Orange'), (11, 'Blue Orange Red'), (1, 'Red'), (10, 'Blue Orange'), (5, 'Green Red'), (21, 'Green Purple Red'), (16, 'Purple'), (9, 'Orange Red'), (20, 'Green Purple'), (4, 'Green'), (14, 'Blue Green Orange'), (15, 'Blue Green Orange Red'), (26, 'Blue Orange Purple'), (28, 'Green Orange Purple'), (0, 'Blank'), (22, 'Blue Green Purple'), (7, 'Blue Green Red'), (30, 'Blue Green Orange Purple'), (31, 'Blue Green Orange Purple Red'), (24, 'Orange Purple'), (19, 'Blue Purple Red')], verbose_name='Color', default=0),
        ),
    ]

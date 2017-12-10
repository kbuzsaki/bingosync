# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0023_auto_20160609_1121'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Creation Time'),
        ),
        migrations.AlterField(
            model_name='game',
            name='game_type_value',
            field=models.IntegerField(choices=[(30, 'Banjo-Tooie'), (5, 'Castlevania: Symphony of the Night'), (14, 'Crash Twinsanity'), (18, 'Custom (Advanced)'), (26, 'Dark Souls'), (9, 'Donkey Kong 64'), (13, 'Final Fantasy 1'), (31, 'Final Fantasy 4 - Ancient Cave'), (16, 'Lego Star Wars'), (15, 'Lufia 2: Ancient Cave'), (10, 'Pikmin'), (35, 'Pikmin 2'), (8, 'Pokémon Crystal'), (39, 'Pokémon Crystal - Randomizer'), (41, 'Pokémon Crystal - Tournament'), (40, 'Pokémon Emerald - Randomizer'), (37, 'Pokémon Platinum'), (7, 'Pokémon Red/Blue'), (12, 'Pokémon Red/Blue - Randomizer'), (23, 'Pokémon Ruby/Sapphire'), (19, 'Pokémon Snap'), (28, 'Psychonauts'), (47, 'Rabi-Ribi'), (38, 'Rayman (PS1)'), (27, 'Road Trip Adventure'), (25, 'Sonic Adventure 2'), (42, 'Sonic Adventure 2 - Dark Story'), (33, 'Sonic Adventure 2 - Hero Story'), (43, 'Sonic Adventure 2 - Long'), (17, "Spyro 2: Ripto's Rage"), (2, 'Super Mario 64'), (29, 'Super Mario Galaxy'), (46, 'Super Mario Odyssey'), (45, 'Super Mario Odyssey - Short'), (11, 'Super Mario Sunshine'), (6, 'Super Mario World'), (4, 'Super Metroid'), (24, 'The Addams Family (SNES)'), (34, 'The Witness'), (36, 'Zelda: A Link To The Past - Randomizer'), (32, 'Zelda: Breath of the Wild'), (3, "Zelda: Majora's Mask"), (1, 'Zelda: Ocarina of Time'), (20, 'Zelda: Ocarina of Time - Blackout'), (21, 'Zelda: Ocarina of Time - Short'), (22, 'Zelda: Ocarina of Time - Short Blackout'), (44, 'Zelda: Skyward Sword')], verbose_name='Game Type'),
        ),
        migrations.AlterField(
            model_name='player',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Creation Time'),
        ),
        migrations.AlterField(
            model_name='room',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Creation Time'),
        ),
    ]

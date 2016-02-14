# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0011_room_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='goalevent',
            name='remove_color',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(default=0, choices=[(10, 'Blue Orange'), (0, 'Blank'), (19, 'Blue Purple Red'), (28, 'Green Orange Purple'), (13, 'Green Orange Red'), (7, 'Blue Green Red'), (26, 'Blue Orange Purple'), (27, 'Blue Orange Purple Red'), (20, 'Green Purple'), (11, 'Blue Orange Red'), (29, 'Green Orange Purple Red'), (17, 'Purple Red'), (22, 'Blue Green Purple'), (6, 'Blue Green'), (30, 'Blue Green Orange Purple'), (24, 'Orange Purple'), (31, 'Blue Green Orange Purple Red'), (21, 'Green Purple Red'), (16, 'Purple'), (9, 'Orange Red'), (5, 'Green Red'), (25, 'Orange Purple Red'), (14, 'Blue Green Orange'), (8, 'Orange'), (12, 'Green Orange'), (23, 'Blue Green Purple Red'), (15, 'Blue Green Orange Red'), (1, 'Red'), (3, 'Blue Red'), (18, 'Blue Purple'), (2, 'Blue'), (4, 'Green')], verbose_name='Color'),
        ),
    ]

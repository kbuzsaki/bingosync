# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0016_auto_20160222_2354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(verbose_name='Color', default=0, choices=[(24, 'Orange Purple'), (23, 'Blue Green Purple Red'), (21, 'Green Purple Red'), (25, 'Orange Purple Red'), (15, 'Blue Green Orange Red'), (29, 'Green Orange Purple Red'), (16, 'Purple'), (4, 'Green'), (22, 'Blue Green Purple'), (2, 'Blue'), (5, 'Green Red'), (30, 'Blue Green Orange Purple'), (19, 'Blue Purple Red'), (31, 'Blue Green Orange Purple Red'), (18, 'Blue Purple'), (12, 'Green Orange'), (1, 'Red'), (10, 'Blue Orange'), (7, 'Blue Green Red'), (8, 'Orange'), (13, 'Green Orange Red'), (9, 'Orange Red'), (3, 'Blue Red'), (28, 'Green Orange Purple'), (26, 'Blue Orange Purple'), (17, 'Purple Red'), (6, 'Blue Green'), (11, 'Blue Orange Red'), (0, 'Blank'), (20, 'Green Purple'), (27, 'Blue Orange Purple Red'), (14, 'Blue Green Orange')]),
        ),
    ]

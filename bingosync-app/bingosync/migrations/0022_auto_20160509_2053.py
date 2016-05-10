# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0021_auto_20160430_1841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(default=0, choices=[(0, 'Blank'), (1, 'Red'), (2, 'Blue'), (3, 'Blue Red'), (4, 'Green'), (5, 'Green Red'), (6, 'Blue Green'), (7, 'Blue Green Red'), (8, 'Orange'), (9, 'Orange Red'), (10, 'Blue Orange'), (11, 'Blue Orange Red'), (12, 'Green Orange'), (13, 'Green Orange Red'), (14, 'Blue Green Orange'), (15, 'Blue Green Orange Red'), (16, 'Purple'), (17, 'Purple Red'), (18, 'Blue Purple'), (19, 'Blue Purple Red'), (20, 'Green Purple'), (21, 'Green Purple Red'), (22, 'Blue Green Purple'), (23, 'Blue Green Purple Red'), (24, 'Orange Purple'), (25, 'Orange Purple Red'), (26, 'Blue Orange Purple'), (27, 'Blue Orange Purple Red'), (28, 'Green Orange Purple'), (29, 'Green Orange Purple Red'), (30, 'Blue Green Orange Purple'), (31, 'Blue Green Orange Purple Red')], verbose_name='Color'),
        ),
    ]

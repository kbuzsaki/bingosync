# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0013_auto_20160213_2013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(verbose_name='Color', choices=[(16, 'Purple'), (10, 'Blue Orange'), (29, 'Green Orange Purple Red'), (19, 'Blue Purple Red'), (27, 'Blue Orange Purple Red'), (31, 'Blue Green Orange Purple Red'), (12, 'Green Orange'), (14, 'Blue Green Orange'), (8, 'Orange'), (23, 'Blue Green Purple Red'), (22, 'Blue Green Purple'), (0, 'Blank'), (15, 'Blue Green Orange Red'), (9, 'Orange Red'), (30, 'Blue Green Orange Purple'), (26, 'Blue Orange Purple'), (24, 'Orange Purple'), (5, 'Green Red'), (18, 'Blue Purple'), (2, 'Blue'), (6, 'Blue Green'), (11, 'Blue Orange Red'), (21, 'Green Purple Red'), (13, 'Green Orange Red'), (4, 'Green'), (20, 'Green Purple'), (1, 'Red'), (25, 'Orange Purple Red'), (3, 'Blue Red'), (17, 'Purple Red'), (7, 'Blue Green Red'), (28, 'Green Orange Purple')], default=0),
        ),
    ]

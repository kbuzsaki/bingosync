# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0015_auto_20160213_2237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(choices=[(15, 'Blue Green Orange Red'), (18, 'Blue Purple'), (5, 'Green Red'), (1, 'Red'), (20, 'Green Purple'), (3, 'Blue Red'), (4, 'Green'), (29, 'Green Orange Purple Red'), (31, 'Blue Green Orange Purple Red'), (19, 'Blue Purple Red'), (10, 'Blue Orange'), (30, 'Blue Green Orange Purple'), (11, 'Blue Orange Red'), (23, 'Blue Green Purple Red'), (21, 'Green Purple Red'), (14, 'Blue Green Orange'), (26, 'Blue Orange Purple'), (6, 'Blue Green'), (27, 'Blue Orange Purple Red'), (24, 'Orange Purple'), (0, 'Blank'), (7, 'Blue Green Red'), (22, 'Blue Green Purple'), (9, 'Orange Red'), (2, 'Blue'), (8, 'Orange'), (17, 'Purple Red'), (12, 'Green Orange'), (25, 'Orange Purple Red'), (13, 'Green Orange Red'), (28, 'Green Orange Purple'), (16, 'Purple')], default=0, verbose_name='Color'),
        ),
    ]

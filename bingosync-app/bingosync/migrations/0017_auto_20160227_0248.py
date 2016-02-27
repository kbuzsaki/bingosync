# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0016_auto_20160227_0228'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='hide_card',
            field=models.BooleanField(verbose_name='Initially Hide Card', default=False),
        ),
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(choices=[(0, 'Blank'), (8, 'Orange'), (3, 'Blue Red'), (13, 'Green Orange Red'), (17, 'Purple Red'), (18, 'Blue Purple'), (1, 'Red'), (2, 'Blue'), (15, 'Blue Green Orange Red'), (22, 'Blue Green Purple'), (31, 'Blue Green Orange Purple Red'), (19, 'Blue Purple Red'), (11, 'Blue Orange Red'), (23, 'Blue Green Purple Red'), (24, 'Orange Purple'), (16, 'Purple'), (28, 'Green Orange Purple'), (21, 'Green Purple Red'), (27, 'Blue Orange Purple Red'), (20, 'Green Purple'), (29, 'Green Orange Purple Red'), (4, 'Green'), (26, 'Blue Orange Purple'), (5, 'Green Red'), (7, 'Blue Green Red'), (6, 'Blue Green'), (30, 'Blue Green Orange Purple'), (9, 'Orange Red'), (10, 'Blue Orange'), (25, 'Orange Purple Red'), (12, 'Green Orange'), (14, 'Blue Green Orange')], default=0, verbose_name='Color'),
        ),
    ]

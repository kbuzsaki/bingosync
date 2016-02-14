# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0012_auto_20160213_1611'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='lockout_mode_value',
            field=models.IntegerField(verbose_name='Lockout Mode', choices=[(1, 'Non-Lockout'), (2, 'Lockout')], default=1),
        ),
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(verbose_name='Color', choices=[(23, 'Blue Green Purple Red'), (15, 'Blue Green Orange Red'), (19, 'Blue Purple Red'), (13, 'Green Orange Red'), (9, 'Orange Red'), (14, 'Blue Green Orange'), (20, 'Green Purple'), (12, 'Green Orange'), (11, 'Blue Orange Red'), (7, 'Blue Green Red'), (5, 'Green Red'), (4, 'Green'), (6, 'Blue Green'), (21, 'Green Purple Red'), (30, 'Blue Green Orange Purple'), (28, 'Green Orange Purple'), (1, 'Red'), (25, 'Orange Purple Red'), (2, 'Blue'), (29, 'Green Orange Purple Red'), (0, 'Blank'), (31, 'Blue Green Orange Purple Red'), (10, 'Blue Orange'), (27, 'Blue Orange Purple Red'), (3, 'Blue Red'), (16, 'Purple'), (26, 'Blue Orange Purple'), (22, 'Blue Green Purple'), (18, 'Blue Purple'), (8, 'Orange'), (17, 'Purple Red'), (24, 'Orange Purple')], default=0),
        ),
    ]

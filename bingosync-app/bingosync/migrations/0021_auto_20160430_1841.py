# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0020_auto_20160413_1525'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatevent',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='colorevent',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='connectionevent',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='goalevent',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='revealedevent',
            name='timestamp',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='square',
            name='color_value',
            field=models.IntegerField(default=0, choices=[(22, 'Blue Green Purple'), (3, 'Blue Red'), (5, 'Green Red'), (26, 'Blue Orange Purple'), (15, 'Blue Green Orange Red'), (12, 'Green Orange'), (20, 'Green Purple'), (2, 'Blue'), (21, 'Green Purple Red'), (7, 'Blue Green Red'), (18, 'Blue Purple'), (19, 'Blue Purple Red'), (16, 'Purple'), (1, 'Red'), (29, 'Green Orange Purple Red'), (11, 'Blue Orange Red'), (31, 'Blue Green Orange Purple Red'), (30, 'Blue Green Orange Purple'), (27, 'Blue Orange Purple Red'), (13, 'Green Orange Red'), (23, 'Blue Green Purple Red'), (28, 'Green Orange Purple'), (8, 'Orange'), (10, 'Blue Orange'), (4, 'Green'), (14, 'Blue Green Orange'), (0, 'Blank'), (6, 'Blue Green'), (24, 'Orange Purple'), (17, 'Purple Red'), (9, 'Orange Red'), (25, 'Orange Purple Red')], verbose_name='Color'),
        ),
    ]

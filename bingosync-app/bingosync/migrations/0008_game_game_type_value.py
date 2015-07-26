# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0007_auto_20150702_0551'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='game_type_value',
            field=models.IntegerField(choices=[(1, 'OoT'), (2, 'SM64')], verbose_name='Game Type', default=1),
            preserve_default=False,
        ),
    ]

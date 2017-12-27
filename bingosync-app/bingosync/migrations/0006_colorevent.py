# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0005_auto_20150630_0535'),
    ]

    operations = [
        migrations.CreateModel(
            name='ColorEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('timestamp', models.DateTimeField(verbose_name='Sent', default=datetime.datetime.now)),
                ('color_value', models.IntegerField(choices=[(1, 'Blank'), (2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')])),
                ('player', models.ForeignKey(to='bingosync.Player', on_delete=models.CASCADE)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

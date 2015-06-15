# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
import bingosync.models
import uuid


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ChatEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('timestamp', models.DateTimeField(verbose_name='Sent')),
                ('body', models.TextField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ConnectionEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('timestamp', models.DateTimeField(verbose_name='Sent')),
                ('event', models.IntegerField(choices=[(1, 'Connected'), (2, 'Disconnected')])),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('seed', models.IntegerField()),
                ('created_date', models.DateTimeField(verbose_name='Creation Time', default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='GoalEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('timestamp', models.DateTimeField(verbose_name='Sent')),
                ('color', models.IntegerField(choices=[(1, 'Blank'), (2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')])),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('name', models.CharField(max_length=50)),
                ('color_value', models.IntegerField(verbose_name='Color', default=2, choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')])),
                ('created_date', models.DateTimeField(verbose_name='Creation Time', default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('name', models.CharField(max_length=255)),
                ('created_date', models.DateTimeField(verbose_name='Creation Time', default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='Square',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('slot', models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9'), (10, '10'), (11, '11'), (12, '12'), (13, '13'), (14, '14'), (15, '15'), (16, '16'), (17, '17'), (18, '18'), (19, '19'), (20, '20'), (21, '21'), (22, '22'), (23, '23'), (24, '24'), (25, '25')], validators=[bingosync.models.validate_in_slot_range])),
                ('goal', models.CharField(max_length=255)),
                ('color_value', models.IntegerField(verbose_name='Color', default=1, choices=[(1, 'Blank'), (2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')])),
                ('game', models.ForeignKey(to='bingosync.Game')),
            ],
        ),
        migrations.AddField(
            model_name='player',
            name='room',
            field=models.ForeignKey(to='bingosync.Room'),
        ),
        migrations.AddField(
            model_name='goalevent',
            name='player',
            field=models.ForeignKey(to='bingosync.Player'),
        ),
        migrations.AddField(
            model_name='goalevent',
            name='square',
            field=models.ForeignKey(to='bingosync.Square'),
        ),
        migrations.AddField(
            model_name='game',
            name='room',
            field=models.ForeignKey(to='bingosync.Room'),
        ),
        migrations.AddField(
            model_name='connectionevent',
            name='player',
            field=models.ForeignKey(to='bingosync.Player'),
        ),
        migrations.AddField(
            model_name='chatevent',
            name='player',
            field=models.ForeignKey(to='bingosync.Player'),
        ),
        migrations.AlterUniqueTogether(
            name='square',
            unique_together=set([('game', 'slot')]),
        ),
    ]

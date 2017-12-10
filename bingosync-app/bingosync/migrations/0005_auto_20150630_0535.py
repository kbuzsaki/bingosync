# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime

# this warning has been fixed, but migrations keep throwing it, so silence in the migration
import warnings
warnings.filterwarnings("ignore", ".*received a naive datetime.*while time zone support is active.*")

class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0004_auto_20150630_0526'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatevent',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='connectionevent',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime.now, verbose_name='Sent'),
        ),
        migrations.AlterField(
            model_name='goalevent',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime.now, verbose_name='Sent'),
        ),
    ]

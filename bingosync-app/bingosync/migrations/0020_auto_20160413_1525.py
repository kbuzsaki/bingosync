# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0019_auto_20160306_0255'),
    ]

    operations = [
        migrations.CreateModel(
            name='FilteredPattern',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('pattern', models.CharField(max_length=255)),
            ],
        ),
    ]

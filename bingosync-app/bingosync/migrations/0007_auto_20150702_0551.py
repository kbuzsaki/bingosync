# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bingosync', '0006_colorevent'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatevent',
            name='player_color_value',
            field=models.IntegerField(choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')], default=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='colorevent',
            name='player_color_value',
            field=models.IntegerField(choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')], default=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='connectionevent',
            name='player_color_value',
            field=models.IntegerField(choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')], default=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='goalevent',
            name='player_color_value',
            field=models.IntegerField(choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')], default=2),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='colorevent',
            name='color_value',
            field=models.IntegerField(choices=[(2, 'Red'), (3, 'Blue'), (4, 'Green'), (5, 'Orange'), (6, 'Purple')]),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2018-01-01 04:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20171231_1456'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

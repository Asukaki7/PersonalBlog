# Generated by Django 4.2.7 on 2023-11-11 18:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='add_data',
            new_name='add_date',
        ),
        migrations.RenameField(
            model_name='category',
            old_name='pub_data',
            new_name='pub_date',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='add_data',
            new_name='add_date',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='pub_data',
            new_name='pub_date',
        ),
        migrations.RenameField(
            model_name='tag',
            old_name='add_data',
            new_name='add_date',
        ),
        migrations.RenameField(
            model_name='tag',
            old_name='pub_data',
            new_name='pub_date',
        ),
    ]
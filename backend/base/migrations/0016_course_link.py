# Generated by Django 3.2 on 2021-06-04 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_delete_pfp'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='link',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
# Generated by Django 4.1.4 on 2022-12-30 18:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Hero',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
                ('health', models.IntegerField(default=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hero', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Hero(models.Model):
    name = models.CharField(max_length=30, unique=True)
    health = models.IntegerField(default=100)
    user = models.ForeignKey(User, related_name='hero', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
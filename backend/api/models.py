from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# appointment modeli olusturma
# time eklenecek
# service option olarak eklenecek


class Appt(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    services = models.CharField(max_length=50, blank=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

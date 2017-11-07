from django.db import models


class Project(models.Model):
    chief = models.CharField(max_length=100)
    date = models.DateField()
    description = models.TextField()
    name = models.CharField(max_length=50)
    place = models.CharField(max_length=100)
    big_image_path = models.CharField(max_length=200)
    small_image_path = models.CharField(max_length=200)
    text = models.TextField()

from django.db import models

class user_data(models.Model):
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    BirthDay = models.DateField()
    Address = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    ZipCode = models.IntegerField()
    LandLine = models.CharField(max_length=100)
    Phone = models.IntegerField()
    ifInfected = models.BooleanField()
    Conditions = models.CharField(max_length=100, blank=True)

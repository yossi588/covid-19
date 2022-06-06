from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers
from covid.models import user_data


class USER_DATA(serializers.ModelSerializer):
    class Meta:
        model = user_data
        fields = ('FirstName', 
         'LastName', 
         'BirthDay', 
         'Address', 
         'City', 
         'ZipCode', 
         'LandLine', 
         'Phone', 
         'isInfected', 
         'Conditions'
        )
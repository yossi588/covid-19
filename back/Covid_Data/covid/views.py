from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from covid.models import user_data
from covid.serializers import USER_DATA
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser


def home(request):
    return render(request, 'home.html')


@api_view(['GET'])
def getData(request):
    dep = user_data.objects.all()
    dep_ser = USER_DATA(dep, many=True)
    return JsonResponse(dep_ser.data, safe = False)


@api_view(['POST'])
def SaveData(request):
    data_json = JSONParser().parse(request)

    serializer = USER_DATA(data = data_json)
    if serializer.is_valid():
        serializer.save()
        JsonResponse.status_code = 200
        return JsonResponse({"message": "successfully"}, safe = False)

def home(request):
    return render(request, 'home.html')
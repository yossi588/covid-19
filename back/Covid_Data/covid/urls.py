from django import template
from django.urls import path,include
from . import views

# declear the rout and what function each of url will do
urlpatterns = [
    path('', views.home, name="home"),
    path('summary/', views.getData),
    path('savedata/', views.SaveData),
]
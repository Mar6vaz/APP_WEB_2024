from django.urls import path
from . import views

urlpatterns = [
    path('', views.tarea_list, name='tarea_list'),
]
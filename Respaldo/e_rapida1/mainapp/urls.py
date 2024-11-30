from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('mision/', views.mision, name='mision'),
    path('vision/', views.vision, name='vision'),
    path('about/', views.about, name='about'),
]

from django.shortcuts import render

# Create your views here.
from .models import Tarea

def tarea_list(request):
    tareas = Tarea.objects.all()  # Obtiene todas las tareas
    return render(request, 'tareas/tarea_list.html', {'tareas': tareas})

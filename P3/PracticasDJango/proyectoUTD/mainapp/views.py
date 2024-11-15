from django.shortcuts import render, HttpResponse

# Create your views here.
def index(requets):
    return render(requets, 'mainapp/index.html', {
        'title':'Inicio  Pagina Principal',
        'content': '.:: ¡Bienvenido a mi pagina principal!::.' 
    })




def abaut(requets):
    mensaje='Bienvenido mi nombre es: Amparo Franco'
    return render(requets, 'mainapp/about.html', {
        'title': 'Hacerca de Nosotros',
        'content': 'Somos un grupo de desarrolladores de SW Multiplataforma',
        'mensaje':'mensaje'
    })
def mision(requets):
    return render(requets, 'mainapp/mision.html',{
        'title': 'Mision',
        'content': '.::¡Bienvenido a la mision de mi empresa::.!',
    })
def vision(requets):
    return render(requets, 'mainapp/vision.html',{
        'title': 'Vision',
        'content': '.::¡Bienvenido a la vision de mi empresa::.!',
    })
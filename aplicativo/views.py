from django.shortcuts import get_object_or_404, render
from .models import Projeto, Sobre

def index(request):
    dados = {
        'projetos': Projeto.objects.all()
    }
    return render(request, 'index.html', dados)

def projeto(request, projeto_id):
    dados = {
        'projeto': get_object_or_404(Projeto, pk=projeto_id)
    }
    return render(request, 'projeto.html', dados)

def sobre(request):

    dados = {
        'sobre': Sobre.objects.get(id=1)
    }
    return render(request, 'sobre.html', dados)

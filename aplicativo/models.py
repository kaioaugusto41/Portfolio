from django.db import models

class Projeto(models.Model):
    titulo_projeto = models.CharField(max_length=300)
    data_pub = models.DateField()
    resumo_projeto = models.TextField()
    linguagem_projeto = models.CharField(max_length=100)
    framework_projeto = models.CharField(max_length=100)
    banco_projeto = models.CharField(max_length=100)
    texto1_projeto = models.TextField()
    texto2_projeto = models.TextField()
    link_projeto = models.CharField(max_length=500)

    def __str__(self):
        return self.titulo_projeto

class Sobre(models.Model):
    titulo = models.CharField(max_length=100)
    subtitulo = models.CharField(max_length=500)
    texto= models.TextField()
    link_linkedin = models.CharField(max_length=500)
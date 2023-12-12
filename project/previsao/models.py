# previsao/models.py
from django.db import models

class DadosAlunos(models.Model):
  curso = models.CharField(max_length=50)
  periodo = models.CharField(max_length=20)
  ano = models.IntegerField()
  quantidade_alunos = models.IntegerField()

class PrevisaoModelo(models.Model):
  nome = models.CharField(max_length=50, unique=True)

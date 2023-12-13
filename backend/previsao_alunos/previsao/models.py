from django.db import models

class DadosAlunos(models.Model):
  curso = models.CharField(max_length=50)
  ano = models.IntegerField()
  quantidade_alunos = models.IntegerField()

  def __str__(self):
    return f"{self.curso} - {self.ano}"

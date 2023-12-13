from django.db import models

class Previsao(models.Model):
    curso = models.CharField(max_length=100)
    periodo = models.CharField(max_length=7)  # Ex: '2024/1'
    planilha = models.FileField(upload_to='uploads/')
    metodo = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.curso} - {self.periodo} - {self.metodo}"

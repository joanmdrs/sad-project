# previsao_api/serializers.py
from rest_framework import serializers
from .models import DadosAlunos, PrevisaoModelo

class DadosAlunosSerializer(serializers.ModelSerializer):
  class Meta:
    model = DadosAlunos
    fields = '__all__'

class PrevisaoModeloSerializer(serializers.ModelSerializer):
  class Meta:
    model = PrevisaoModelo
    fields = '__all__'

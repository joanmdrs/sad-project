# Seu arquivo urls.py no aplicativo Django

from django.urls import path
from .views import prever_alunos

urlpatterns = [
    path('prever_alunos/', prever_alunos, name='prever_alunos'),
    # Adicione outras URLs conforme necessário
]

from django.urls import path
from .views import PrevisaoAlunosView

urlpatterns = [
    path('previsao/', PrevisaoAlunosView.as_view(), name='previsao_alunos'),
]

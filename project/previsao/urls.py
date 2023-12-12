from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DadosAlunosViewSet, PrevisaoModeloViewSet, PrevisaoSerieTemporalView

router = DefaultRouter()
router.register(r'dados_alunos', DadosAlunosViewSet, basename='dados_alunos')
router.register(r'previsao_modelo', PrevisaoModeloViewSet, basename='previsao_modelo')

urlpatterns = [
  path('', include(router.urls)),
  path('previsao_serie_temporal/', PrevisaoSerieTemporalView.as_view(), name='previsao_serie_temporal'),
]

import pandas as pd
from rest_framework.response import Response
from rest_framework.views import APIView
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from .models import DadosAlunos
from .serializers import DadosAlunosSerializer

class PrevisaoSerieTemporalView(APIView):
  def post(self, request, format=None):
    # Recebe o arquivo Excel
    file = request.FILES['file']
    
    # Lê o arquivo Excel em um DataFrame do pandas
    df = pd.read_excel(file)

    # Filtra os dados para o curso e período especificados na requisição
    curso = request.data.get('curso')
    periodo = request.data.get('periodo')
    df_filtrado = df[(df['curso'] == curso) & (df['periodo'] == periodo)]

    # Criando uma série temporal com pandas
    ts = pd.Series(df_filtrado['quantidade_alunos'].values, index=df_filtrado['ano'])

    # Ajustando o modelo de suavização exponencial
    modelo = ExponentialSmoothing(ts, seasonal='add', seasonal_periods=1)
    resultado = modelo.fit()

    # Fazendo previsões para o próximo ano
    previsao = resultado.predict(start=len(ts), end=len(ts))

    # Retorna os resultados
    return Response({'historico': ts.to_dict(), 'previsao': previsao.to_dict()})

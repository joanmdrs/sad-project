# previsao/views.py
import pandas as pd
import matplotlib.pyplot as plt
from django.http import JsonResponse
from django.views import View
from .models import DadosAlunos
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from statsmodels.tsa.holtwinters import SimpleExpSmoothing

class PrevisaoAlunosView(View):
  def post(self, request, *args, **kwargs):
    try:
        # Lendo dados da planilha Excel
        data = pd.read_excel(request.FILES['planilha'])
        
        # Filtrando dados com base no curso e período desejado
        curso = request.POST.get('curso')
        periodo = int(request.POST.get('periodo'))

        data_curso = data[data['curso'] == curso]
        data_curso_periodo = data_curso[data_curso['ano'] >= periodo]

        # Realizando previsões para cada modelo escolhido
        modelos = {
            'media_movel': self.prever_media_movel(data_curso_periodo),
            'media_movel_ponderada': self.prever_media_movel_ponderada(data_curso_periodo),
            'suavizacao_exponencial': self.prever_suavizacao_exponencial(data_curso_periodo),
        }

        # Exemplo de plotagem do gráfico
        plt.plot(data_curso_periodo['ano'], data_curso_periodo['quantidade_alunos'], label='Dados Reais')
        for modelo, previsao in modelos.items():
            plt.plot(data_curso_periodo['ano'], previsao, label=modelo)

        plt.title('Previsão de Alunos')
        plt.xlabel('Ano')
        plt.ylabel('Quantidade de Alunos')
        plt.legend()
        plt.grid(True)
        plt.savefig('previsao_alunos.png')

        return JsonResponse({'mensagem': 'Previsão realizada com sucesso!'})

    except Exception as e:
        return JsonResponse({'erro': str(e)})

    def prever_media_movel(self, data):
      return data['quantidade_alunos'].rolling(window=3).mean()

    def prever_media_movel_ponderada(self, data):
      return data['quantidade_alunos'].ewm(span=3, adjust=False).mean()

    def prever_suavizacao_exponencial(self, data):
      model = ExponentialSmoothing(data['quantidade_alunos'], trend='add', seasonal='add', seasonal_periods=3)
      fit = model.fit()
      return fit.fittedvalues

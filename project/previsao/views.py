# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')  # Escolha o backend 'Agg'
from io import BytesIO

@csrf_exempt
def prever_alunos(request):
    if request.method == 'POST':
        # Processar os dados do formulário
        curso = request.POST.get('curso')
        periodo = request.POST.get('periodo')
        planilha = request.FILES.get('planilha')
        metodo = request.POST.get('metodo')

        try:
            # Ler a planilha
            df = pd.read_excel(planilha)

            # Ajustar para possíveis espaços nos nomes das colunas
            df.columns = df.columns.str.strip()

            # Verificar se a coluna agora existe
            if 'Ano/Semestre' in df.columns:
                # Tratar a coluna 'Ano/Semestre' para ser usada como data
                df['Data'] = pd.to_datetime(df['Ano/Semestre'], format='%Y/%m')

                # Restante do seu código...
                # Realizar previsões (exemplo com SARIMAX)
                model = SARIMAX(df['Quantidade de alunos'], order=(1, 1, 1), seasonal_order=(1, 1, 1, 12))
                result = model.fit()
                future_semester = pd.date_range(start=f'{periodo}-01-01', end=f'{periodo}-06-30', freq='M')
                forecast = result.get_forecast(steps=len(future_semester))
                forecast_values = forecast.predicted_mean

                # Plotar resultados (opcional)
                plt.plot(df['Data'], df['Quantidade de alunos'], label='Histórico')
                plt.plot(future_semester, forecast_values, label='Previsão', linestyle='--')
                plt.legend()

                # Salvar gráfico no sistema de arquivos
                buffer = BytesIO()
                plt.savefig(buffer, format='png')
                plt.close()
                buffer.seek(0)
                
                grafico_path = f'uploads/grafico_{curso}_{periodo}.png'
                default_storage.save(grafico_path, ContentFile(buffer.read()))
                buffer.close()

                # Preparar os resultados para enviar como JSON
                resultados = {
                    'curso': curso,
                    'periodo': periodo,
                    'grafico_path': grafico_path,
                    'previsao_2024_1': forecast_values.tolist(),
                    'datas_2024_1': future_semester.strftime('%Y-%m').tolist(),
                }

                return JsonResponse(resultados)

            else:
                return JsonResponse({'error': 'A coluna "Ano/Semestre" não foi encontrada na planilha.'}, status=400)

        except Exception as e:
            return JsonResponse({'error': f'Ocorreu um erro: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Método não permitido'}, status=405)
# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')  # Escolha o backend 'Agg'
from io import BytesIO

@csrf_exempt
def prever_alunos(request):
    if request.method == 'POST':
        # Processar os dados do formulário
        curso = request.POST.get('curso')
        periodo = request.POST.get('periodo')
        planilha = request.FILES.get('planilha')
        metodo = request.POST.get('metodo')

        try:
            # Ler a planilha
            df = pd.read_excel(planilha)

            # Ajustar para possíveis espaços nos nomes das colunas
            df.columns = df.columns.str.strip()

            # Verificar se a coluna agora existe
            if 'Ano/Semestre' in df.columns:
                # Tratar a coluna 'Ano/Semestre' para ser usada como data
                df['Data'] = pd.to_datetime(df['Ano/Semestre'], format='%Y/%m')

                # Restante do seu código...
                # Realizar previsões (exemplo com SARIMAX)
                model = SARIMAX(df['Quantidade de alunos'], order=(1, 1, 1), seasonal_order=(1, 1, 1, 12))
                result = model.fit()
                future_semester = pd.date_range(start=f'{periodo}-01-01', end=f'{periodo}-06-30', freq='M')
                forecast = result.get_forecast(steps=len(future_semester))
                forecast_values = forecast.predicted_mean

                # Plotar resultados (opcional)
                plt.plot(df['Data'], df['Quantidade de alunos'], label='Histórico')
                plt.plot(future_semester, forecast_values, label='Previsão', linestyle='--')
                plt.legend()

                # Salvar gráfico no sistema de arquivos
                buffer = BytesIO()
                plt.savefig(buffer, format='png')
                plt.close()
                buffer.seek(0)
                
                grafico_path = f'uploads/grafico_{curso}_{periodo}.png'
                default_storage.save(grafico_path, ContentFile(buffer.read()))
                buffer.close()

                # Preparar os resultados para enviar como JSON
                resultados = {
                    'curso': curso,
                    'periodo': periodo,
                    'grafico_path': grafico_path,
                    'previsao_2024_1': forecast_values.tolist(),
                    'datas_2024_1': future_semester.strftime('%Y-%m').tolist(),
                }

                return JsonResponse(resultados)

            else:
                return JsonResponse({'error': 'A coluna "Ano/Semestre" não foi encontrada na planilha.'}, status=400)

        except Exception as e:
            return JsonResponse({'error': f'Ocorreu um erro: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Método não permitido'}, status=405)

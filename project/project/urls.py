# Seu arquivo urls.py no projeto Django

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('previsao/', include('previsao.urls')),  # Inclua as URLs do seu aplicativo
]

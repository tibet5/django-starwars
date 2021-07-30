from django.urls import path
from . import views


urlpatterns = [
    path('', views.ship, name='ship-ship'),
    path('<str:name>/', views.detail, name='ship-detail'),
]

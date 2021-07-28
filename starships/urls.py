from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='starships-home'),
    path('<str:name>', views.detail, name='ship-detail'),
    path('search/', views.search, name='ship-search'),
]

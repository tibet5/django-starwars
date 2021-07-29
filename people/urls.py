from django.urls import path
from . import views


urlpatterns = [
    path('', views.people, name='people-home'),
    path('<str:name>/', views.detail, name='people-detail'),
]
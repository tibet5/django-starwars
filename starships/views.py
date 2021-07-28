from django.shortcuts import render
import requests
import urllib


# Create your views here.
def home(request):
    response = requests.get('https://swapi.dev/api/starships/')
    res = response.json()
    ships = {
        'ships': res['results']
    }
    return render(request, 'starships/home.html', ships)


def detail(request, name):
    response = requests.get('https://swapi.dev/api/starships/?search='+urllib.parse.quote_plus(name))
    res = response.json()
    context = {
        'ship': res['results']
    }
    return render(request, 'starships/detail.html', context)


def search(request):
    return render(request, 'starships/search.html')

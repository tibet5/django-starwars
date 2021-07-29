from django.shortcuts import render
import requests
import urllib


# Create your views here.
def people(request):
    response = requests.get('https://swapi.dev/api/people/')
    res = response.json()
    peoples = {
        'peoples': res['results']
    }
    return render(request, 'people/home.html', peoples)

def detail(request, name):
    response = requests.get('https://swapi.dev/api/people/?search='+urllib.parse.quote_plus(name))
    res = response.json()
    context = {
        'peoples': res['results']
    }
    return render(request, 'people/detail.html', context)
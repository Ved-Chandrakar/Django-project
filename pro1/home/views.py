from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return render(request, "index.html")

def booking(request):
    return render(request, "booking.html")

def message(request):
    return HttpResponse("<h1>Hey I'm Vedansh Chandrakar.</h1>")
    


    
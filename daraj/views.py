from django.shortcuts import render

# Create your views here.



from django.http import HttpResponse
from django.shortcuts import render   


def home(request):
    # return HttpResponse("<<<< HOME PAGE >>>>>")
    return  render(request, 'website/index.html')

def about(request):
    #return HttpResponse("About Page")
    return render(request,'website/about.html')

def contact(request):
    #retur HttpResponse(" Contact Page")
    return render(request,'website/contact.html')
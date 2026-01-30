from django.urls import path
from . import views

#URL Configuration 
urlpatterns = [
    path('',views.home, name="home"),
    path('about/',views.about, name="about"),
    path('contact/',views.contact, name="contact"),
]
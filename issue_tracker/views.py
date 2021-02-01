from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic

from .models import Issue

# Create your views here.


def index(request):
    return HttpResponse("This is the index page of the Issue Tracker app.")

class IssueView(generic.DetailView):
    model = Issue

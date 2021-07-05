from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.views import generic
from django.utils import timezone

from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer, IssueSerializer

from .models import Issue, Project
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed and edited.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer



class IssueViewSet(viewsets.ModelViewSet):

    queryset = Issue.objects.all()
    serializer_class = IssueSerializer



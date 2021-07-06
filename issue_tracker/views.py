from rest_framework import viewsets
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from .serializers import ProjectSerializer, IssueSerializer

from .models import Issue, Project


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed and edited.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer



class IssueViewSet(viewsets.ModelViewSet):

    queryset = Issue.objects.all()
    serializer_class = IssueSerializer


# Add React index.html
index = never_cache(TemplateView.as_view(template_name='index.html'))



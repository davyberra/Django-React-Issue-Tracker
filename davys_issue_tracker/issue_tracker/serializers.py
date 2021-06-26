from rest_framework import serializers
from .models import Project, Issue

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['project_name', 'user']

class IssueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Issue
        fields = [
            'issue_text',
            'date_posted',
            'date_completed',
            'priority',
            'issue_type',
            'user',
            'project',
            'in_progress',
            'completed'
        ]
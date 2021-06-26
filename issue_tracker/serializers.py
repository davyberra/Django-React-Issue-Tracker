from rest_framework import serializers
from .models import Project, Issue

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_name', 'user']

class IssueSerializer(serializers.ModelSerializer):
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
from rest_framework import serializers
from .models import Project, Issue
from django.contrib.auth.models import User


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_name', 'user', 'pk']


class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = [
            'pk',
            'user',
            'issue_text',
            'project',
            'priority',
            'issue_type',
            # 'date_posted',
            'date_completed',
            'in_progress',
            'completed',
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'is_staff',
            'email',
        ]

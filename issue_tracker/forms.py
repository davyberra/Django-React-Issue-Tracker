from django import forms
from django.forms import ModelForm
from .models import Issue, Project
from django.contrib.auth.models import User

class NameForm(forms.Form):
    your_name = forms.CharField(label="Your name", max_length=100)


class IssueForm(ModelForm):
    class Meta:
        model = Issue
        fields = ['issue_text', 'issue_type', 'priority']


class IssueDetailForm(ModelForm):
    class Meta:
        model = Issue
        fields = ['issue_text', 'priority']


class CreateUserForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']


class CreateProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = ['project_name']
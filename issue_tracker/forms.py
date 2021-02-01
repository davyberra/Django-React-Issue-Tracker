from django import forms
from django.forms import ModelForm
from .models import Issue

class NameForm(forms.Form):
    your_name = forms.CharField(label="Your name", max_length=100)


class IssueForm(ModelForm):
    class Meta:
        model = Issue
        fields = ['issue_text', 'priority']

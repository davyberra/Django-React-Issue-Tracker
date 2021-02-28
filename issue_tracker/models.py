import datetime

from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Project(models.Model):
    project_name = models.CharField(max_length=30)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.project_name

class Issue(models.Model):
    CRITICAL = 'Critical'
    HIGH = 'High'
    MEDIUM = 'Medium'
    LOW = 'Low'
    PRIORITY_CHOICES = [
        (CRITICAL, 'Critical'),
        (HIGH, 'High'),
        (MEDIUM, 'Medium'),
        (LOW, 'Low')
    ]
    issue_text = models.TextField()
    date_posted = models.DateTimeField('date_posted')
    date_completed = models.DateTimeField('date_completed', null=True)
    priority = models.CharField(
        max_length=8,
        choices=PRIORITY_CHOICES,
        default=LOW,
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    in_progress = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    # priority_mappings = {
    #     'Critical': 'danger',how
    #     'High': 'warning',
    #     'Medium': 'info',
    #     'Low': 'success',
    # }

    def __str__(self):
        return self.issue_text



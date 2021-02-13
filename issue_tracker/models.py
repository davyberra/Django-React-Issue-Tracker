from django.db import models
from django.contrib.auth.models import User

# Create your models here.


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
    priority = models.CharField(
        max_length=8,
        choices=PRIORITY_CHOICES,
        default=LOW,
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    # priority_mappings = {
    #     'Critical': 'danger',
    #     'High': 'warning',
    #     'Medium': 'info',
    #     'Low': 'success',
    # }

    def __str__(self):
        return self.issue_text

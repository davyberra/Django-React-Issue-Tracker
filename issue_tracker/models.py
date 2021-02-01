from django.db import models

# Create your models here.


class Issue(models.Model):
    CRITICAL = 'C'
    HIGH = 'H'
    MEDIUM = 'M'
    LOW = 'L'
    PRIORITY_CHOICES = [
        (CRITICAL, 'Critical'),
        (HIGH, 'High'),
        (MEDIUM, 'Medium'),
        (LOW, 'Low')
    ]
    issue_text = models.TextField()
    date_posted = models.DateTimeField('date_posted')
    priority = models.CharField(
        max_length=1,
        choices=PRIORITY_CHOICES,
        default=LOW,
    )

    def __str__(self):
        return self.issue_text

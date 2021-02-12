"""
WSGI config for davys_issue_tracker project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from whitenoise import WhiteNoise
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'davys_issue_tracker.deploy_settings')

application = get_wsgi_application()
application = WhiteNoise(application, root='issue_tracker/static/issue_tracker')

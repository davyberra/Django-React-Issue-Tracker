"""davys_issue_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework import routers
from issue_tracker import views
from django.urls import include, path

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewSet)
router.register(r'issues', views.IssueViewSet)

urlpatterns = [
    # React paths
    path('admin/', admin.site.urls),
    path('api/v1/issue_tracker/', include('issue_tracker.urls')),

    path('api/', include(router.urls)),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

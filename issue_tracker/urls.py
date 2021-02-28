from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProjectView.as_view(), name='home_url'),
    path('<int:pk>/issues/', views.IndexView.as_view(), name='issue'),
    path('get_name', views.get_name, name='get_name'),
    path('<int:pk>/new_issue/', views.new_issue, name='new_issue'),
    path('<int:pk>/success/', views.success_view, name='success'),
    path('<int:pk>/<id>/delete', views.delete_view, name='delete'),
    path('<int:pk>/delete', views.delete_project_view, name='delete_project'),
    path('create_user/', views.create_user, name='create_user'),
    path('projects/', views.ProjectView.as_view(), name='project'),
    path('create_project/', views.create_project, name='create_project'),
    path('<int:pk>/<id>/complete/', views.complete_issue_view, name='complete_issue'),
    path('<int:pk>/completed_issues/', views.CompletedIssuesIndexView.as_view(), name='completed_issues'),
]
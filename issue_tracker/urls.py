from django.urls import path
from . import views

urlpatterns = [
    path('<slug:pk>/issues', views.IndexView.as_view(), name='index'),
    path('get_name', views.get_name, name='get_name'),
    path('new_issue/', views.new_issue, name='new_issue'),
    path('success/', views.success_view, name='success'),
    path('<id>/delete', views.delete_view, name='delete'),
    path('create_user/', views.create_user, name='create_user'),
    path('projects/', views.ProjectView.as_view(), name='project'),
]
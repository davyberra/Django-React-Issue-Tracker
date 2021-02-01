from django.urls import path
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('get_name', views.get_name, name='get_name'),
    path('new_issue/', views.new_issue, name='new_issue'),
    path('success/', views.success_view, name='success'),
]
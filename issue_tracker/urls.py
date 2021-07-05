from django.urls import include, path
import rest_auth
from . import views

urlpatterns = [
    # React paths
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
]
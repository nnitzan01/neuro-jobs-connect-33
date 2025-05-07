
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views as rest_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('jobs.urls')),
    path('api-auth/', include('rest_framework.urls')),  # Adds login/logout on the browsable API
]

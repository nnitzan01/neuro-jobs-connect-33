
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, ProfileViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'profiles', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

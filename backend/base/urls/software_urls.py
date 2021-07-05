from django.urls import path
from base.views import software_views as views
from rest_framework_simplejwt.views import (TokenObtainPairView,)
# Triggers views
# connecting views to urls

# we want to pull the data from the 'backend' for the 'frontend' by calling these routes
# and we are gonna get the data with the views
urlpatterns = [
    path('', views.getVersions, name='versions'),
    path('version/', views.getLatestVersion, name='latest-version'),
    path('<str:pk>/', views.getVersion, name='version'),
]

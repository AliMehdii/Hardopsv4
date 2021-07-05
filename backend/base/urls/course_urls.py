from django.urls import path
from base.views import course_views as views
from rest_framework_simplejwt.views import (TokenObtainPairView,)
# Triggers views
# connecting views to urls

# we want to pull the data from the 'backend' for the 'frontend' by calling these routes
# and we are gonna get the data with the views
urlpatterns = [
    path('', views.getCourses, name='courses'),
    path('course/', views.getLatestCourse, name='latest-course'),
    path('<str:pk>/', views.getCourse, name='course'),
]
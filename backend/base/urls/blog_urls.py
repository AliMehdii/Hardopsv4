from django.urls import path, include
from base.views import blog_views as views
from rest_framework_simplejwt.views import (TokenObtainPairView,)
# Triggers views
# connecting views to urls

# we want to pull the data from the 'backend' for the 'frontend' by calling these routes
# and we are gonna get the data with the views
urlpatterns = [
    path('', views.getBlogs, name='blogs'),
    # path('top/', views.getTopBlogs, name='top-Blogs'),
    path('<str:pk>/', views.getBlog, name='blog'),
    path('api/summernote/', include('django_summernote.urls')),
]

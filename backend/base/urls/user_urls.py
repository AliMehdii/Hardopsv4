from django.urls import path
from base.views import user_views as views
from rest_framework_simplejwt.views import (TokenObtainPairView,)
# Triggers views
# connecting views to urls

# we want to pull the data from the 'backend' for the 'frontend' by calling these routes
# and we are gonna get the data with the views
urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name='users-profile'),
    path('profile/update/', views.updateUserProfile, name='user-profile-update'),
    path('', views.getUsers, name='users'),
]

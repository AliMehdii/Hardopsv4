from django.urls import path
from base.views import product_views as views
from rest_framework_simplejwt.views import (TokenObtainPairView,)
# Triggers views
# connecting views to urls

# we want to pull the data from the 'backend' for the 'frontend' by calling these routes
# and we are gonna get the data with the views
urlpatterns = [
    path('', views.getProducts, name='products'),
    path('top/', views.getTopProducts, name='top-products'),
    path('<str:pk>/reviews/', views.createProductReview, name='create-review'),
    path('<str:pk>/', views.getProduct, name='products'),
]

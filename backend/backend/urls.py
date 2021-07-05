"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/summernote/', include('django_summernote.urls')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/blogs/', include('base.urls.blog_urls')),
    path('api/versions/', include('base.urls.software_urls')),
    path('api/courses/', include('base.urls.course_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
]

# Here we are saying to look for the image link (MEDIA_URL) in the folder MEDIA_ROOT that we set up in the settings.py file
urlpatterns += static(settings.MEDIA_URL,  document_root=settings.MEDIA_ROOT)

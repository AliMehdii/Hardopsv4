from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Blog, BlogTag
from base.serializers import BlogSerializer, BlogTagSerializer

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.conf import settings
from django.core.mail import EmailMessage
from django.db.models.signals import post_save


@api_view(['GET'])
def getBlogs(request):
    # Here we get all the versions without the last one because
    # we displayed it alone above in the download component.
    blogs = Blog.objects.filter(
        _id__gte=1).order_by('-_id')[0:]
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getBlog(request, pk):
    blog = Blog.objects.get(_id=pk)
    tag_list = blog.tags.all()
    serializer = BlogSerializer(blog, many=False)
    # This is the all of 'Tags' for the 'Blog'
    serializer2 = BlogTagSerializer(tag_list, many=True)

    # This is the List of the 'Blogs' 'Tags'
    tagValuesList = tag_list.values_list('tag', flat=True)
    tagList = list(tagValuesList)
    tagsList = []
    for tag in range(0, len(tagList)):
        tagsList.append(tagList[tag])

    # This is the list of the Blog's 'Tags' that we will use to filter the BLogs
    SuggTags = []
    for tag in range(0, len(tagsList)):
        t = BlogTag.objects.get(tag=tagsList[tag])
        SuggTags.append(t)
    # print('SuggTags: ', SuggTags)

    # Here we itterate through the SuggTags list
    for tag in range(0, len(SuggTags)):
        suggBlogs = SuggTags[tag].blog_set.all()
        # print('suggBlogs1: ', suggBlogs)

    # print('suggBlogs: ', suggBlogs)
    newSugg = suggBlogs.exclude(_id=pk)
    # print('newSugg: ', newSugg)
    serializer3 = BlogSerializer(newSugg, many=True)

    return Response({'blog': serializer.data, 'tag_list': serializer2.data, 'suggBlogs': serializer3.data})

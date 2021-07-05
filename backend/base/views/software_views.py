from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Software
from base.serializers import ProductSerializer, SoftwareSerializer

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.conf import settings
from django.core.mail import EmailMessage
from django.db.models.signals import post_save


@api_view(['GET'])
def getVersions(request):
    # Here we get all the versions without the last one because
    # we displayed it alone above in the download component.
    versions = Software.objects.filter(
        _id__gte=1).order_by('-_id')[1:]
    serializer = SoftwareSerializer(versions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getVersion(request, pk):
    version = Software.objects.get(_id=pk)
    serializer = SoftwareSerializer(version, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getLatestVersion(requests):
    software = Software.objects.filter(
        _id__gte=1).order_by('-_id')[0:1]
    print('Type', type(software))
    serializer = SoftwareSerializer(software, many=True)
    return Response(serializer.data)


# def new_version(sender, instance, **kwargs):
#     users = User.objects.all()
#     usersValuesList = users.values_list('email', flat=True)
#     emailList = list(usersValuesList)
#     emailsList = []
#     for user in range(0, len(emailList)):
#         emailsList.append(emailList[user])
#     message = 'Hi, we just realeased a new version of HardOps' + """ Go check it out,
#     on our website at 'http://localhost:3000/download', We hope you like it. """
#     email = EmailMessage(
#         'HardOps New Version Released',
#         message,
#         settings.EMAIL_HOST_USER,
#         emailsList,
#     )
#     email.fail_silently = False
#     email.send()
#     print('Users Notifyied about the new version released!')
#     print('-------------------------------------')
#     return Response('User Notifyied!')


# # This will execute the new_course methode and notify the users
# post_save.connect(new_version, sender=Software)

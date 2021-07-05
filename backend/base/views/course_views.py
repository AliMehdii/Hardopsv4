from django.template.loader import render_to_string
from django.dispatch import receiver
from django.db.models import signals
from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Course
from base.serializers import CourseSerializer, UserSerializer

from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.conf import settings
from django.core.mail import EmailMessage
from django.db.models.signals import post_save


@api_view(['GET'])
def getCourses(request):
    # Here we get all the courses without the last one because we displayed it alone above in the page.
    courses = Course.objects.filter(
        _id__gte=1).order_by('-_id')[1:]
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCourse(request, pk):
    course = Course.objects.get(_id=pk)
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getLatestCourse(requests):
    course = Course.objects.filter(
        _id__gte=1).order_by('-_id')[0:1]
    serializer = CourseSerializer(course, many=True)
    return Response(serializer.data)


# This view notifies all registered users when new courses are updated or available
# def new_course(sender, instance, **kwargs):
#     users = User.objects.all()
#     usersValuesList = users.values_list('email', flat=True)
#     emailList = list(usersValuesList)
#     emailsList = []
#     for user in range(0, len(emailList)):
#         emailsList.append(emailList[user])

#     message = 'Hi, we just updated and realeased a new course' + """ Go check it out,
#     on our website at 'http://localhost:3000/courses', We hope you like it. """
#     email = EmailMessage(
#         'HardOps, New Courses Available',
#         message,
#         settings.EMAIL_HOST_USER,
#         emailsList,
#     )
#     email.fail_silently = False
#     email.send()
#     print('Users Notifyied about the new course!')
#     print('-------------------------------------')
#     return Response('User Notifyied!')


# # This will execute the new_course methode and notify the users
# post_save.connect(new_course, sender=Course)

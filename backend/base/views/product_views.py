from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.models import Product, Review
from base.serializers import ProductSerializer

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.conf import settings
from django.core.mail import EmailMessage
from django.db.models.signals import post_save


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    print('Query: ', query)
    # This is to make sure to always have something in the searchbox when making the api call
    # Other wise we will get None in the query which will cause errors
    if query == None:
        query = ''
    # This means that if the name of the product contains any value inside of that query string
    # then it is gonna filter and return the products and the filter is case Insensitive .
    products = Product.objects.filter(name__icontains=query)
    # This gives us the page number we should be on
    page = request.query_params.get('page')
    # This function takes in the 'queryset' we need to 'paginate' and we return the number of 'products' we want to return with each 'queryset'
    paginator = Paginator(products, 4)
    # Here when we pass in a page we try for what products we need to get
    try:
        products = paginator.page(page)
    # This is for if we have 'never' sent any page in the request
    # Cause technicaly when we 'first load' our website we are not 'sending' a page
    # So we just want to return the '1st' page
    except PageNotAnInteger:
        products = paginator.page(1)
    # This is for if we have an empty page then we will send the user to the last page
    except EmptyPage:
        products = paginator.page(paginator.num_pages)
    # And for the frontend to not get errors if page == None then we will set page to 1
    if page == None:
        page = 1

    # Making sure that the 'page Number' returned is an 'Integer'
    page = int(page)

    serializer = ProductSerializer(products, many=True)
    # Here we Customize the 'response' and make it return the 'products', 'page' and 'number of pages'
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})
    # So now after customizing the 'response' in the 'frontend' need to change the response in our 'productsReducer'
    # because it is not expecting a 'query set' like this it just expects an array of products like usual


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getTopProducts(requests):
    # We 'filter' the 'top' products by getting every product that has a 'rating' 'greated or equal' to the value set
    # and in case of having many products with that rating we will limit them to only 5 showing up in the carousel
    products = Product.objects.filter(rating__gte=2).order_by('-rating')[0:3]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    # 1- Review already exists
    # We want to know if a customer already wrote a review so we filter the 'revirews' by the 'user'
    alreadyExists = product.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {'detail': 'Product Already Reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 2- If the customer hasn't writen a 'review' before .
    elif data['rating'] == 0:
        content = {'detail': 'Please Select a Rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 3- Create Review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            # this is how we get the 'rating' and 'comment' from the frontend
            rating=data['rating'],
            comment=data['comment'],
        )
        # Here we get all query set of all the reviews
        reviews = product.review_set.all()
        # We update the number of 'reviews' written by getting the length of the 'querySet'
        product.numReviews = len(reviews)

        # Here we get the total rating given to a product from all the reviews
        # So we go through the 'query set' and for each 'review' we extract it's 'rating'
        total = 0
        for i in reviews:
            total += i.rating

        # We get the 'final' 'Product Rating' with this operation
        # We get the 'total' number 'rating' and 'divide' by the number of 'reviews'
        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')

from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import ProductSerializer, OrderSerializer

from rest_framework import status
from datetime import datetime

from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string


@api_view(['POST'])
@permission_classes([IsAuthenticated])
# To add the order items we need to access then pass the data
#  created in the 'PlaceOrderScreen.js'
def addOrderItems(request):
    user = request.user  # We request the data from user and data objects
    data = request.data
    # We access the 'data' object to get the variable 'orderItems'
    # that we created in the 'PlaceOrderScreen.js'
    # and get the 'orderitems' sent in the post request
    orderItems = data['orderItems']
    # We check if we even have items in the order
    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # Create Order
        order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            taxPrice=data['taxPrice'],
            shippingPrice=data['shippingPrice'],
            totalPrice=data['totalPrice'],
        )
        # Create Shipping Address
        shipping = ShippingAddress.objects.create(
            order=order,
            address=data['shippingaddress']['address'],
            city=data['shippingaddress']['city'],
            postalCode=data['shippingaddress']['postalCode'],
            country=data['shippingaddress']['country'],
        )
    # Create Order Items and set the Order to orderItem relationship
    # We are gonna loop through the orderItems list that we created above
        for i in orderItems:
            product = Product.objects.get(_id=i['product'])
            item = OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                qty=i['qty'],
                price=i['price'],
                image=product.image1.url,
            )
            # Update stock
            product.countInStock -= item.qty
            product.save()
        # So before to use this in react we need to serialize this and turned into json data
        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):
    user = request.user
    try:
        order = Order.objects.get(_id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            return Response({'detail': 'Not Authorized To View This Order'},
                            status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail': 'The Order Does Not Exist'},
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request, pk):
    order = Order.objects.get(_id=pk)
    # Update the status
    order.isPaid = True
    order.paidAt = datetime.now()
    order.save()
    # user = request.user
    # first_name = {user.first_name}
    # first_nameString = " ".join(first_name)
    # message = 'Hi, ' + first_nameString + """ Thanks for your purchase,
    # This simple purchase is a tremendous help to the development of HardOps."""
    # email = EmailMessage(
    #     'HardOps',
    #     message,
    #     settings.EMAIL_HOST_USER,
    #     [user.email],
    # )
    # email.fail_silently = False
    # email.send()

    return Response('Order Was Paid')

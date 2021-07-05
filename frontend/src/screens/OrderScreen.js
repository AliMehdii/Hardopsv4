import React, { useEffect, useState } from 'react'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

function OrderScreen({ match }) {
    const orderId = match.params.id
    const dispatch = useDispatch()

    // This state is for knowing if ou 'sdk'(software developement kit) is ready for 'PayPal'
    // and once we load it that is gonna be set to true  
    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    // To not have confilcting errors we will give a names our destructured imports
    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const cart = useSelector(state => state.cart)

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }

    // This function is dependent on our order status
    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.source = 'https://www.paypal.com/sdk/js?client-id=ASLSXgxT39tSome2DYEcHaTsMr4y7GpP0YeDupQvvWR7VNfrV1wZudNHcyc1ld1jTlBnuZ3fqdLP0iGt'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        // Here we append the script to the 'DOM'
        document.body.appendChild(script)
    }

    // 'order._id' is how our order is sent in the backend
    useEffect(() => {
        if (!order || successPay || order._id !== Number(orderId)) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(orderId))
            //Then we check the 'state' of our 'orderPay'
            //And if the order is not paid we load the buttons
            //So we add the script and then we get our script ready
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, order, orderId, successPay])

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
    }

    return loading ? (
        <Loader />
    ) :
        error ? (
            <Message variant='danger'>{error}</Message>)
            : (
                <div>
                    <Row className='d-flex justify-content-center mb-4'>
                        <Col md={6} className=" block-example border-bottom  border-dark">
                            <h1 className="text-center">My purchase ticket</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Row>
                            <Col md={6}>
                                <ListGroup.Item className="d-flex justify-content-center">
                                    <Col md={6}>
                                        <h2 className="text-center block-example border-bottom  border-dark">Order Items</h2>
                                    </Col>
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    {order.orderItems.length === 0 ? <Message variant='info'>
                                        'Order is Empty
                                        </Message> : (
                                        <ListGroup variant='flush'>
                                            {order.orderItems.map((item, index) => (
                                                <ListGroup.Item key={index}>
                                                    <Row>
                                                        <Col md={2}>
                                                            <Image src={item.image} alt={item.name} fluid rounded />
                                                        </Col>
                                                        <Col md={4}>
                                                            <Link to={`/product/${item.product}`} style={{ color: 'orange', textDecoration: 'none' }}>{item.name}</Link>
                                                        </Col>
                                                        <Col md={6}>
                                                            {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    )}
                                </ListGroup.Item>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item className="d-flex justify-content-center">
                                            <Col md={6}>
                                                <h2 className="text-center block-example border-bottom  border-dark">OrderSummary</h2>
                                            </Col>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Items</Col>
                                                <Col>${order.itemsPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Shipping:</Col>
                                                <Col>${order.shippingPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Tax:</Col>
                                                <Col>${order.taxPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Total:</Col>
                                                <Col>${order.totalPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {!order.isPaid && (
                                            <ListGroup.Item>
                                                {loadingPay && <Loader />}

                                                {sdkReady ? (
                                                    <Loader />
                                                ) : (
                                                    <PayPalButton
                                                        amount={order.totalPrice}
                                                        onSuccess={successPaymentHandler}
                                                    />
                                                )}
                                            </ListGroup.Item>
                                        )}
                                        <ListGroup.Item>
                                            {order.isPaid && (
                                                <Row>
                                                    <Message variant='success' ><strong className='text-center'> Payment successful</strong></Message>
                                                    <Message variant='success'><a href={`mailto:${order.user.email}`} style={{ color: 'green' }}>Check your Email for confirmation</a></Message>
                                                </Row>
                                            )}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <h2 className="text-center">User Details</h2>
                                            <p><strong>Name: </strong>{order.user.name}</p>
                                            <p><strong>Email: </strong><a href={`mailto:${order.user.email}`} style={{ color: 'orange', textDecoration: 'none' }}>{order.user.email}</a></p>
                                            <p>
                                                <strong>Shipping: </strong>
                                                {cart.shippingAddress.address},
                                    {' '}
                                                {cart.shippingAddress.city},
                                    {' '} {cart.shippingAddress.postalCode},
                                    {' '} {cart.shippingAddress.country}.
                                        </p>
                                            <h3 className="text-center">Delivery status</h3>
                                            {order.isDelivered ? (
                                                <Message variant='success'>Delivered On {order.deliveredOn}</Message>
                                            ) : (
                                                <Message variant='danger'>Not delivered yet</Message>
                                            )}
                                        </ListGroup.Item>

                                    </ListGroup>

                                </Card>
                            </Col>

                        </Row>

                    </Row>
                </div>
            )
}

export default OrderScreen
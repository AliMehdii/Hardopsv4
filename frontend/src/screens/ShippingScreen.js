import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, ListGroup, FormGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress, savePaymentMethod } from '../actions/cartActions'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Submited');
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <Row>

            <FormContainer>
                <CheckoutSteps step1 step2 />
                <Row className="d-flex justify-content-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <h2 className="text-center block-example border-bottom  border-dark">Shipping</h2>
                    </Col>
                </Row>

                <Form onSubmit={onSubmitHandler}>
                    <Row>
                        <Form.Group controlId="address">
                            <Form.Label> Address</Form.Label>
                            <Form.Control
                                className="mb-2"
                                required
                                type='text'
                                placeholder='Enter adress'
                                value={address ? address : ''}
                                onChange={(e) => setAddress(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label> City</Form.Label>
                            <Form.Control
                                className="mb-2"
                                required
                                type='text'
                                placeholder='Enter city'
                                value={city ? city : ''}
                                onChange={(e) => setCity(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="postalCode">
                            <Form.Label> Postal Code</Form.Label>
                            <Form.Control
                                className="mb-2"
                                required
                                type='text'
                                placeholder='Enter postalCode'
                                value={postalCode ? postalCode : ''}
                                onChange={(e) => setPostalCode(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="country">
                            <Form.Label> Country</Form.Label>
                            <Form.Control
                                className="mb-2"
                                required
                                type='text'
                                placeholder='Enter country'
                                value={country ? country : ''}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="d-flex justify-content-center py-4">
                        <Col md={10} className="d-flex justify-content-center">
                            <h2 className="text-center block-example border-bottom  border-dark">Payment Method</h2>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center " >

                        <Row className="px-5 mx-5">
                            <Col md={8} className="px-5 mx-5">
                                <Form.Group className="">
                                    <Form.Check
                                        className="mb-2"

                                        type='radio'
                                        label='PayPal or Credit Card'
                                        id='PayPal'
                                        name='Payment Methode'
                                        checked
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    >
                                    </Form.Check>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row className="px-5 mx-5">
                            <Col md={10} className="px-5 mx-5">
                                <Form.Group>
                                    <Form.Check
                                        className="mb-2"

                                        type='radio'
                                        label='MasterCard (Not implemented yet)'
                                        id='MasterCard'
                                        name='Payment Methode'
                                    >
                                    </Form.Check>


                                </Form.Group>
                            </Col>
                        </Row>
                        <Col className="text-center my-3">
                            <h5>- More Payment methodes comming soon - </h5>
                        </Col>
                    </Row>




                    <Col md={12} className="my-3">
                        <ListGroup>
                            <Button className=" btn-block" type='submit' variant='warning'>Continue</Button>
                        </ListGroup>
                    </Col>
                </Form>
            </FormContainer>
        </Row>
    )
}

export default ShippingScreen


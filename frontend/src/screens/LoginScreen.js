import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'

function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (

        <Row>
            <Col md={6} className="d-flex justify-content-center">
                <Col md={4} className="d-flex justify-content-center">
                    <Image src="images/carousel/welcome.png" style={{ height: 600, width: 700 }} />
                </Col>
            </Col>
            <Col md={6}>

                <Row className="d-flex justify-content-center mb-4">
                    <Col md={6} className="d-flex justify-content-center block-example border-bottom  border-dark">
                        <h1>Sign In</h1>
                    </Col>
                </Row>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}

                <Row>
                    <Col>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="email">
                                <Form.Label> Email Address</Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label> password </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <ListGroup className='my-3'>
                                <Button className='btn-block' type='submit' variant='warning'>Sign In</Button>
                            </ListGroup>
                        </Form>
                    </Col>
                </Row>

                <Row className='py-3'>
                    <Col >
                        New Customer?,
                  <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} style={{ color: 'orange', textDecoration: 'none' }} activeStyle={{ color: 'red' }} > Register </Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default LoginScreen

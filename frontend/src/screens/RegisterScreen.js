import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'


function RegisterScreen({ location, history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }



    return (
        <Row>

            <Col>
                <Row className="d-flex justify-content-center mb-4">
                    <Col md={6} className="d-flex justify-content-center block-example border-bottom  border-dark">
                        <h1>Register</h1>
                    </Col>
                </Row>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Row className="d-flex justify-content-center ">
                    <Col md={8}>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="name">
                                <Form.Label> Name</Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    required
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label> Email Address</Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    required
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label> Password </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    required
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="passwordConfirm">
                                <Form.Label> Confirm Password </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    required
                                    type='password'
                                    placeholder=' Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <ListGroup md={12} className='my-3'>
                                <Button type='submit' size="md" variant='warning' >Register</Button>
                            </ListGroup>
                        </Form>
                    </Col>
                </Row>

                <Row className='py-3 d-flex justify-content-center'>
                    <Col md={8} className=" mx-2 px-3">Have an Account?,
                <Link to={redirect ? `/login?redirect=${redirect}` : '/register'} style={{ color: 'orange', textDecoration: 'none' }} > Sign In</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default RegisterScreen

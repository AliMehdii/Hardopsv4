import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Table, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'

function ProfileScreen({ history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, user, userInfo, history, success])


    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'email': email,
                'password': password,
            }))
            setMessage('')
        }
    }

    return (
        <Row>
            {/* Profile Header */}
            <Row className="bg-light d-flex justify-content-center pt-4">
                <Col className="text-center">
                    <h1 className="text-uppercase" style={{ fontSize: 90 }}>My Profile</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col className="text-center">
                    <h5 style={{ fontSize: 20 }}>{user.email && user.email}</h5>
                </Col>
            </Row>

            {/* Orders History */}
            <Row className="my-4 d-flex justify-content-center">
                <Col md={4}>
                    <h2 className="text-center mb-4 block-example border-bottom  border-dark">My Orders History</h2>
                </Col>

                <Col md={12} className="text-center bg-light">

                    {loadingOrders ? (
                        <Loader />
                    ) : errorOrders ? (
                        <Message variant='danger'>{errorOrders}</Message>
                    ) : (
                        <Table stripped responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Paid</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>${order.totalPrice}</td>
                                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                            <i className='fas fa-times' style={{ color: 'orange' }}></i>
                                        )}</td>
                                        <td>
                                            <LinkContainer to={`/order/${order._id}`}>
                                                <Button className='btn-sm' variant="warning">Details</Button>
                                            </LinkContainer>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )
                    }
                </Col>

                {/* Profile */}
                <Col md={4}>
                    <h2 className="text-center my-4 block-example border-bottom  border-dark">My Credentials</h2>
                </Col>

                <Row>
                    <Col md={12} className="bg-light d-flex justify-content-center ">
                        {message && <Message variant='danger'>{message}</Message>}
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader />}
                        <Form onSubmit={submitHandler}>
                            <Row>
                                <Row>
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
                                        <Form.Label> Email Adress</Form.Label>
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

                                            type='password'
                                            placeholder=' Confirm Password'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mt-3  d-flex justify-content-center">
                                    <Col md={12} >
                                        <ListGroup>
                                            <Button className=" btn-block" type='submit' variant='warning'>Update</Button>
                                        </ListGroup>
                                    </Col>
                                </Row>

                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Row>
        </Row>
    )
}

export default ProfileScreen

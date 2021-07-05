import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import React from 'react'

function CheckoutSteps({ step1, step2, step3 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login' style={{ color: 'orange', textDecoration: 'none' }}>
                        <Nav.Link> Login</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled> Login</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping' style={{ color: 'orange', textDecoration: 'none' }}>
                        <Nav.Link>Shipping + Payment </Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Shipping + Payment</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/placeorder' style={{ color: 'orange', textDecoration: 'none' }}>
                        <Nav.Link> Place Order</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Place Order</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps

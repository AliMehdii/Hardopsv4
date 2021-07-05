import React from 'react'
import { Card, Row, Col, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Rating from '../components/Rating'


function Product({ match, history, product }) {

    return (
        <Row>
            <Card className='py-3 my-3 rounded' text='dark' fluid >
                <Link to={`/product/${product._id}`} >
                    <Card.Img className="mb-2" variant='top' src={product.image1}></Card.Img>
                </Link>

                <ListGroup className>
                    <Row className="d-flex justify-content-center" >
                        <Link to={`/product/${product._id}`} style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ color: 'red' }}>
                            <Row className="d-flex justify-content-center px-5 my-2" >
                                <h4 className="text-center"><strong>{product.name}</strong></h4>
                            </Row>
                        </Link>
                    </Row>

                    <Row className="d-flex justify-content-center">
                        <Rating value={product.rating} color={'#f8e825'} />
                    </Row>

                    <Row className="d-flex justify-content-center my-4">
                        <Col className="d-flex justify-content-center">
                            <h5><strong>${product.price}</strong></h5>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            {product.countInStock > 0 ? (<h5 style={{ color: 'green' }}> In Stock</h5>) : (
                                <h5 style={{ color: 'red' }}> Out Of Stock</h5>)}
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center">
                        <Row className="d-flex justify-content-center mt-2"><Col className="d-flex justify-content-center mb-4"><strong>Asset Available</strong></Col></Row>
                        <Col className="d-flex justify-content-center">
                            <Button
                                variant="warning"
                                className=' lg'
                                size='sm'
                                type='button'

                            ><h5>Download</h5>
                            </Button>
                        </Col>
                    </Row>
                </ListGroup>
            </Card>
        </Row>
    )
}

export default Product

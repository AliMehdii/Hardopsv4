import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from './Message'
import Loader from './Loader'

import { listTopProducts } from '../actions/productActions'

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())

    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause='hover' className='bg-dark d-flex justify-content-center'  >
                    {products.map(product => (
                        <Carousel.Item key={product._id} interval={3000} className=" ">
                            <Row className="d-flex justify-content-center">
                                <Link to={`/product/${product._id}`}>
                                    <img
                                        className="d-flex w-100"
                                        src={product.image1}
                                        alt={product.name}
                                    />
                                    <Carousel.Caption className='carousel.caption'>
                                        <Row><h1 className='text-uppercase'><strong>{product.name}</strong> </h1></Row>
                                        <Row><h1 className='text-uppercase'><strong>${product.price}</strong></h1></Row>
                                    </Carousel.Caption>
                                </Link>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )
    )
}

export default ProductCarousel


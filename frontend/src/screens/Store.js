import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// Components
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'
// Actions
import { listProducts } from '../actions/productActions'

function Store({ history }) {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList
    // we want to add the keyword to the api call so this data can be sent to the backend
    let keyword = history.location.search
    console.log(keyword);
    // useEffect gets triggered everty single time a the component loads or when a state attribute gets updated
    // we put an empty array at the end of 'useEffetc'cause we want this to update when the component loads not when the 'setState' gets update
    // axios makes the call loads the data 
    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ProductCarousel />}
            <Row className="my-4 py-4 bg-light block-example border-bottom  border-dark">
                <Row>
                    <h2>3D Prints Store</h2>
                </Row>
                <Row >
                    <h5 style={{ fontsize: 120 }} >Here you will find "{products.length * pages}" Prints available with their 3D Obj file, in the carousel above only the most popular products will cycle there, and when ever you click on a product in the store you will be taken to its details page, where you will be able to read more information about the product and read reviews.</h5>
                </Row>
            </Row>

            {loading ? <Loader />
                : error ? <Message variant='danger' >{error}</Message>
                    : (
                        <div >
                            <Row className="d-flex justify-content-center">
                                {products.map((product) => (
                                    <Col className="d-flex justify-content-center" key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product} />
                                    </Col>
                                ))}

                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Paginate page={page} pages={pages} keyword={keyword} />
                            </Row>
                        </div>
                    )
            }
        </div>
    )
}

export default Store

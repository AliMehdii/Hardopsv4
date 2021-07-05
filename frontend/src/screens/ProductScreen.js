import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Container, Button, Card, ListGroup, Carousel, Table, Form } from 'react-bootstrap'
//Components
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'


function ProductScreen({ match, history }) {

    const [qty, setQty] = useState(1)
    // Here we are setting the default values for the review states
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('') // By default the comment is gonna be set to an empty string

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    // When we a user is logged in we want to pull the 'userInfo' so we know is writing the review
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        success: successProductReview,
        error: errorProductReview
    } = productReviewCreate

    // useEffect gets triggered everty single time a the component loads or when a state attribute gets updated
    // we put an empty array at the end of 'useEffetc'cause we want this to update when the component loads not when the 'setState' gets update
    // axios makes the call loads the data 
    // once we create that view we want to make sure the product details are lodaed back in with the updated reviews
    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        console.log('Added To Cart: ', match.params.id);
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }))
    }
    return (
        <Container fluid='md' >
            <Row className="d-flex justify-content-center">
                <Col md={4} className="text-center block-example border-bottom  border-dark mb-4">
                    <h2>Product Details</h2>
                </Col>
            </Row>
            <Row>
                {loading ? <Loader />
                    : error ? <Message variant='danger' >{error}</Message>
                        : (
                            <div>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image1}
                                                        alt="First slide"
                                                    />
                                                    <Carousel.Caption>
                                                        <h3>Front Side</h3>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image2}
                                                        alt="Second slide"
                                                    />
                                                    <Carousel.Caption>
                                                        <h3>Profile Side</h3>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={product.image3}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                        <h3>Back Side</h3>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Row>

                                        <Row >
                                            <ListGroup variant='flush'>
                                                <Row className="d-flex justify-content-around">
                                                    <Col md={4}><h3>Description</h3></Col>
                                                    <Col md={4} className="text-center mt-3"><a href="https://www.github.com" style={{ color: 'orange' }}><h5><i class="fas fa-share-alt"></i> Share</h5></a></Col>
                                                </Row>
                                                <ListGroup.Item>
                                                    {product.description}
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Row>
                                    </Col>


                                    {/*Product overview */}
                                    <Col md={6}>
                                        <Row>
                                            <Col>
                                                <ListGroup variant='flush'>
                                                    <ListGroup.Item className="d-flex justify-content-center">
                                                        <Row>
                                                            <h3>{product.name}</h3>
                                                        </Row>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col>
                                                                <h3>
                                                                    Price: ${product.price}
                                                                </h3>
                                                            </Col>
                                                            <Col>
                                                                <h3>
                                                                    <Rating value={product.rating} color={'#f8e825'} />
                                                                </h3>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row >
                                                            <Col md={6}><h4>Status :</h4> </Col>
                                                            <Col md={6} className="my-1 d-flex justify-content-center">{product.countInStock > 0 ? (<strong style={{ color: 'green' }}> In Stock</strong>) : (
                                                                <strong style={{ color: 'red' }}> Out Of Stock</strong>)}
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    {product.countInStock > 0 && (<ListGroup.Item>
                                                        <Row>
                                                            <Col ><h4> Quantity : </h4></Col>
                                                            <Col md={6} className="d-flex justify-content-center">
                                                                <Col md={2} className="d-flex justify-content-center">
                                                                    <Form.Control
                                                                        as="select"
                                                                        value={qty}
                                                                        onChange={(e) => setQty(e.target.value)}
                                                                    >
                                                                        {
                                                                            [...Array(product.countInStock).keys()].map((x) => (
                                                                                <option key={x + 1} value={x + 1}>
                                                                                    {x + 1}
                                                                                </option>
                                                                            ))
                                                                        }
                                                                    </Form.Control>
                                                                </Col>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    )}

                                                    <ListGroup>
                                                        <Button
                                                            onClick={addToCartHandler}
                                                            variant="warning"
                                                            className='btn-block my-2 pt-2'
                                                            type='button'
                                                            disabled={product.countInStock === 0}
                                                        ><h5>Add To Cart</h5></Button>
                                                    </ListGroup>
                                                </ListGroup>

                                            </Col>
                                        </Row>

                                        {/*Product Details */}
                                        <Row>
                                            <Col>
                                                <Card >
                                                    <ListGroup variant='flush'>
                                                        <ListGroup.Item >
                                                            <Row md={12}>
                                                                <Col md={6} className="px-4 mt-2"> <strong>Artist : </strong> {product.artistName}</Col>
                                                                <Col className="d-flex justify-content-end px-4" md={6}>
                                                                    <Image src={product.artistPic} alt={product.name} height={40} width={40} rounded />
                                                                </Col>
                                                            </Row>

                                                        </ListGroup.Item>

                                                        <ListGroup>
                                                            <Row className="text-center d-flex justify-content-center">
                                                                <Col md={6} className="my-2 block-example border-bottom  border-dark">
                                                                    <h4>Technical Details</h4>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup>
                                                        <Table responsive >
                                                            <tbody>
                                                                <tr >
                                                                    <td className="px-4 ">License: </td>
                                                                    <td className="text-center">{product.licenseUse}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Material: </td>
                                                                    <td className="text-center">{product.material}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Weight: </td>
                                                                    <td className="text-center">{product.weight} Kg</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Height: </td>
                                                                    <td className="text-center"> {product.height} cm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Width: </td>
                                                                    <td className="text-center"> {product.width} cm</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                        <ListGroup>
                                                            <Row className="text-center d-flex justify-content-center">
                                                                <Col md={6} className="my-2 block-example border-bottom  border-dark">
                                                                    <h4>Object File Details </h4>
                                                                </Col>
                                                            </Row>
                                                        </ListGroup>
                                                        <Table responsive>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="px-4">Format</td>
                                                                    <td>{product.assetFormat}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Texture</td>
                                                                    <td>{product.texture === true && 'Available'}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Polygons: </td>
                                                                    <td>{product.polygons}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Vertecies: </td>
                                                                    <td>{product.vertecies}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Hardops version used: </td>
                                                                    <td>{product.versionUsed}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4">Download size: </td>
                                                                    <td>{product.downloadSize}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>


                                                    </ListGroup>
                                                    <ListGroup >
                                                        <Button
                                                            // onClick={downloadFile}
                                                            variant="dark"
                                                            className='btn-block pt-2'
                                                            type='button'
                                                        ><h5>Download</h5></Button>
                                                    </ListGroup>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>


                                {/*Product Reviews */}
                                <Row className="mt-4">
                                    <Col className="d-flex justify-content-center mb-2">
                                        <Col md={6} className="d-flex justify-content-center my-4 block-example border-bottom  border-dark">
                                            <h4>Reviews</h4>
                                        </Col>
                                    </Col>
                                    <Col md={12}>
                                        {product.reviews.length === 0 &&
                                            <Message variant='info'>No Reviews</Message>
                                        }

                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col md={6} className="mx-4"><h4> {product.numReviews} Comments :</h4> </Col>

                                                </Row>

                                            </ListGroup.Item>
                                            {product.reviews.map((review) => (
                                                <ListGroup className="my-2">
                                                    <ListGroup.Item key={review._id}>
                                                        <Row className="d-flex justify-content-right ">

                                                            <Col md={1} className="text-left d-flex justify-content-left mt-2 mx-4">
                                                                <Rating value={review.rating} color='#f8e825' />
                                                            </Col>
                                                            <Col md={4} className="text-left d-flex justify-content-left mt-2 mx-2" >
                                                                on : {review.createdAt.substring(0, 10)}
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Row className="mx-3">
                                                                <Col md={2} className="  ">
                                                                    <strong className="text-uppercase" style={{ fontSize: 18 }} >{review.name} </strong>
                                                                </Col>
                                                            </Row>

                                                            <Row className="mx-3 pt-4">
                                                                <p>{review.comment}</p>
                                                            </Row>

                                                        </Row>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            ))}
                                            <ListGroup.Item>
                                                <Row className="text-center d-flex justify-content-center py-4">
                                                    <Col md={4} className="text-center block-example border-bottom  border-dark">
                                                        <h4>Write a Review</h4>
                                                    </Col>
                                                </Row>

                                                {loadingProductReview && <Loader />}
                                                {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                                {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        {userInfo ? (
                                                            <Form onSubmit={submitHandler}>
                                                                <Form.Group className="mb-2">
                                                                    <Form.Label><h4>Set Rating:</h4></Form.Label>
                                                                    <Form.Control
                                                                        as='select'
                                                                        value={rating}
                                                                        onChange={(e) => setRating(e.target.value)}
                                                                    >
                                                                        <option value=''>Select...</option>
                                                                        <option value='1'>Poor</option>
                                                                        <option value='2'>Fair</option>
                                                                        <option value='3'>Good</option>
                                                                        <option value='4'>Very Good</option>
                                                                        <option value='5'>Exellent</option>
                                                    Rating</Form.Control>
                                                                </Form.Group>
                                                                <Form.Group controlId='comment' className="mt-4">
                                                                    <Form.Label controlId='comment'><h4>Write a review:</h4></Form.Label>
                                                                    <Form.Control
                                                                        as='textarea'
                                                                        rows='5'
                                                                        value={comment}
                                                                        onChange={(e) => setComment(e.target.value)}
                                                                    ></Form.Control>
                                                                </Form.Group>
                                                                <Row className="px-2 py-2">
                                                                    <Button
                                                                        disabled={loadingProductReview}
                                                                        type='submit'
                                                                        variant='warning'
                                                                    >
                                                                        Submit
                                                    </Button>
                                                                </Row>

                                                            </Form>
                                                        ) : (
                                                            <Message variant='mute'>
                                                                <Row className="d-flex justify-content-center">
                                                                    <Col>
                                                                        <Col className=" py-4 d-flex justify-content-center">
                                                                            <h4><strong>You must log in to comment</strong></h4>
                                                                        </Col>
                                                                        <Col className="d-flex justify-content-center">
                                                                            <Link to='/login'>
                                                                                <Button variant="warning"> <h5 className=' mt-2 text-uppercase' >Log in to comment</h5> </Button>
                                                                            </Link>
                                                                        </Col>
                                                                    </Col>
                                                                </Row>
                                                            </Message>

                                                        )}
                                                    </ListGroup.Item>
                                                </ListGroup>

                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </div>
                        )
                }
            </Row>

        </Container>
    )
}

export default ProductScreen

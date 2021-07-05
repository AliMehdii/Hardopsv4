import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Components
import Buttonn from '../components/Buttonn'
import Product from '../components/Product'
import MainImage from '../components/MainImage'
// Actions
import { listVersionDetails } from '../actions/softwareActions'
import { latestCourseAction } from '../actions/courseActions'
import { listTopProducts } from '../actions/productActions'

function HomeScreen({ match }) {

    const dispatch = useDispatch()

    const latestVersion = useSelector(state => state.latestVersion)
    const { software } = latestVersion

    const latestCourse = useSelector(state => state.latestCourse)
    const { course: crs } = latestCourse

    const productTopRated = useSelector(state => state.productTopRated)
    const { products } = productTopRated

    useEffect(() => {
        dispatch(listVersionDetails(match.params.id))
        dispatch(latestCourseAction(match.params.id))
        dispatch(listTopProducts())
    }, [dispatch, match])

    return (
        <div>
            {/*Carousel*/}
            <header>
                <Card className="style=height: 200">
                    <Card.Img variant="top" src="images/carousel/image1.jpg" fluid />
                    <Card.ImgOverlay className="text-light  ">
                        <Row className="text-light  justify-content-around mt-4">
                            <Col className="text-left rounded mt-4" md={6}>
                                <Row className="mx-5 px-5 d-flex justify-content-center">
                                    <Col md={6} className="mx-2 d-flex justify-content-center ">
                                        <Card.Title className="text-light text-center d-flex justify-content-center">
                                            <h1 className="d-flex justify-content-center"><strong className="text-uppercase" style={{ fontSize: 180 }}>HARDOPS</strong></h1>
                                        </Card.Title>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className=" mx-5 px-5 ">
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>
            </header>


            {/*Learn More Button*/}
            <main>
                <Row className=" pb-4 text-center bg-light ">
                    <Row className="  d-flex justify-content-center bg-light ">
                        <Row className="d-flex justify-content-center" >
                            <Col md={10} className="">
                                <h1>What is HardOps studios?</h1>
                            </Col>
                        </Row>
                        <Row className="text-center d-flex justify-content-center">
                            <Col md={6}>
                                <h4>We are young company that Develops an open source software for 3D Design and Modeling called "<strong>HardOps</strong>"</h4>

                                <Row className=" my-4 mx-5 px-3 d-flex justify-content-center ">
                                    <Col className=" mx-4 d-flex justify-content-center ">
                                        <Link to='/about' className=' mx-1'>
                                            <Button className="py-3 px-5" variant="warning" size="lg">Learn more about us</Button>
                                        </Link>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Row>
                </Row>

                {/*Functionalities*/}
                <Row className="text-center mt-4 d-flex justify-content-center">
                    <Col md={6} className="block-example border-bottom  border-dark">
                        <h2>What our website offers</h2>
                    </Col>
                </Row>
                <Row className="text-center bg-light mt-4 pt-4 ">
                    <Col class="col-md-4 mb-5  ">
                        <i class="fas fa-store fa-4x "></i>
                        <Link to='/store' style={{ color: 'orange' }}><h4 class=" mt-4 text-dark font-weight-bold">Store</h4></Link>
                        <p className="text-mute mt-4"> We have a Store where you can buy 3D Prints made thanks to HardOps's various complex 3D Printing functionalities,
                            you can also download the asset files to learn what HardOps can do.</p>
                        <p>Our store is one way to financially support us.</p>
                    </Col>


                    <Col class="col-md-4 mb-4 ">
                        <i class="fas fa-graduation-cap fa-4x "></i>
                        <Link to='/courses' className=' mx-1' style={{ color: 'orange' }}><h4 class="mt-4 text-dark font-weight-bold">Courses</h4></Link>
                        <p class="grey-text">We also offer courses for all skill levels to help you get the most out of HardOps.
                            In these courses you will also learn how to integrate HardOps in your creative Workflow.</p>
                    </Col>


                    <Col class="col-md-4 mb-4 ">
                        <i class="fas fa-download fa-4x"></i>
                        <Link to='/download' className=' mx-1' style={{ color: 'orange' }}><h4 className="mt-4 text-dark font-weight-bold">HardOps</h4></Link>
                        <p className="text-center">HardOps is a 3D software that offers various Features for
                            <strong>3D Printing</strong>, <strong>HardSurface Modeling</strong> and <strong>Rendering</strong> with more features to come.</p>
                    </Col>
                </Row>

                {/*New Feature*/}
                <Row className="text-center mt-1 d-flex justify-content-center">
                    <Col md={4} className="block-example border-bottom  border-dark">
                        <h2>New Feature</h2>
                    </Col>
                </Row>
                <Row id="best-features" className="   bg-light mt-3" >

                    {software.map((software) => (
                        <Row className=" d-flex justify-content-center  mb-5 ">
                            <Col>
                                <Col className="mt-5" key={software._id} >
                                    <MainImage software={software} />
                                </Col>
                            </Col>
                            <Col md={6}>
                                <Col>
                                    <div dangerouslySetInnerHTML={{ __html: software.mainFeature }} />
                                </Col>
                                <Col className="text-left">
                                    <div dangerouslySetInnerHTML={{ __html: software.mainFeatureDescription }} />
                                    <Col>
                                        <h3 className="text-center">.</h3>
                                    </Col>
                                </Col>
                            </Col>
                        </Row>
                    ))}
                </Row>


                {/* latest Course*/}
                <Row className="text-center mt-1 mb-4 d-flex justify-content-center">
                    <Col md={6} className="block-example border-bottom  border-dark">
                        <h2>Our Latest Course</h2>
                    </Col>
                </Row>
                <Row>
                    {crs.map((course) => (
                        <Card className="style=height: 200">
                            <Card.Img variant="top" src={course.thumbnail} fluid />
                            <Card.ImgOverlay className="text-light  ">
                                <Row className="text-light  justify-content-around mt-4">
                                    <Col className="text-left rounded mt-4" md={6}>
                                        <Row className="mx-5 px-5 d-flex justify-content-center">
                                            <Col md={6} className="mx-2 d-flex justify-content-center ">
                                                <Card.Title className="text-light text-center d-flex justify-content-center">
                                                    <h1 className="d-flex justify-content-center"><strong className=" text-warning text-uppercase">{course.name}</strong></h1>
                                                </Card.Title>
                                            </Col>
                                        </Row>
                                        <Row className=" d-flex justify-content-center">
                                            <Col style={{ opacity: 1 }} className="   text-dark-50 rounded d-flex justify-content-center" md={8} >
                                                <Row className="d-flex justify-content-center" >
                                                    <Col md={12} className="block-example border-top  border-mute px-2">
                                                        <Card.Text className=" pt-4 text-light d-flex justify-content-center mx-5 " >
                                                            <strong className="mt-2">{course.length} hours of video content</strong>
                                                        </Card.Text>
                                                        <Card.Text className=" text-light  mx-5 d-flex justify-content-center">
                                                            <strong> {course.level} level</strong>
                                                        </Card.Text>
                                                        <Card.Text className=" text-light  mx-5 d-flex justify-content-center">
                                                            <strong> Full blocking process</strong>
                                                        </Card.Text>
                                                        <Card.Text className="text-light mx-5 d-flex justify-content-center">
                                                            <strong >By {course.author}</strong>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="block-example border-top  border-mute mt-4 "></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="mx-5 px-3 d-flex justify-content-center ">
                                            <Col className="my-5 mx-4 d-flex justify-content-center ">
                                                <a className="gumroad-button" href={course.link} target="_blank">Buy now for {course.price}</a>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} className=" mx-5 px-5 ">
                                    </Col>
                                </Row>
                            </Card.ImgOverlay>
                        </Card>
                    ))}
                </Row>

                <Row className=" mt-4 text-center bg-light">
                    <Col className="my-2">
                        <Link to='/courses'>
                            <Button variant="outline-warning"> More Courses</Button>
                        </Link>
                    </Col>
                </Row>


                {/*Best Selling Prints */}
                <Row className="text-center mt-4 mb-4 d-flex justify-content-center">
                    <Col md={6} className="block-example border-bottom  border-dark">
                        <h2>Our Best Selling 3D Prints</h2>
                    </Col>
                </Row>
                <Row className="text-center bg-light ">
                    <Row className="d-flex justify-content-center">
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Link to='/store'>
                                <Button variant="outline-warning">More Prints</Button>
                            </Link>
                        </Col>
                    </Row>
                </Row>


                {/*Download Button 2*/}
                <Row className="text-center bg-light block-example border-top  border-dark  bg-light mt-3 ">
                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex justify-content-center">
                            <Col className="d-flex justify-content-center">
                                {software.map((software) => (
                                    <Col key={software._id} >
                                        <Buttonn software={software} />
                                    </Col>
                                ))}
                            </Col>
                        </Col>
                    </Row>
                </Row>


                {/*Follow us */}
                <Row className="text-center block-example border-top  border-dark w-100 mt-4">
                    <Col className="text-center py-2">
                        <h2>Find Us On Social Media</h2>
                    </Col>
                </Row>
                <Row className="text-center bg-light d-flex justify-content-center py-4" >
                    <Col md={6}>
                        <h4>Follow the developement and give your thoughts and suggestions,
                            Tag us @Hardops and show us what you created with hardops for a chance to get featured.</h4>
                    </Col>
                </Row>
                <Row className="text-center bg-light d-flex justify-content-center pb-4" >
                    <Col md={4}>
                        <a href="https://github.com/AliMehdii/HardopsSoftware" style={{ color: 'orange' }}><i class="fab fa-twitter  fa-5x"></i></a>
                    </Col>
                    <Col md={4}>
                        <a href="https://github.com/AliMehdii/HardopsSoftware" style={{ color: 'orange' }}><i class="fab fa-facebook-f fa-5x"></i></a>
                    </Col>
                    <Col md={4}>
                        <a href="https://github.com/AliMehdii/HardopsSoftware" style={{ color: 'orange' }}><i class="fab fa-instagram fa-5x"></i></a>
                    </Col>
                </Row>
            </main>
        </div>
    )
}

export default HomeScreen

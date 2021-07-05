import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Row, Col } from 'react-bootstrap'

//Components
import Loader from '../components/Loader'
import Message from '../components/Message'
import Buttonn from '../components/Buttonn'
import Feature from '../components/Feature'
import MainImage from '../components/MainImage'

import { listVersionDetails } from '../actions/softwareActions'

function HomeScreen({ match }) {

    const dispatch = useDispatch()

    const latestVersion = useSelector(state => state.latestVersion)
    const { error, loading, software } = latestVersion

    useEffect(() => {
        dispatch(listVersionDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            {/*Carousel*/}
            <header>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/carousel/image2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Discover a new workflow</h3>
                            <p>Implement this new way of thinking in you next creations.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/carousel/image3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Addapt to new tech</h3>
                            <p>Improve your art</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-flex w-100"
                            src="images/carousel/image1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>No limits & forever Free </h3>
                            <p>Never worry about subscriptions</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>


            {/*Download Button*/}
            <main>
                <Row className="text-center bg-light w-100">

                    <Row className="py-3  d-flex justify-content-center">
                        <Col className="d-flex justify-content-center">
                            {loading ? <Loader />
                                : error ? <Message variant='danger'>{error}</Message>
                                    : (
                                        <Col className="d-flex justify-content-center">
                                            {software.map((software) => (
                                                <Col key={software._id}>
                                                    <Buttonn software={software} />
                                                </Col>
                                            ))}
                                        </Col>
                                    )
                            }
                        </Col>
                    </Row>

                </Row>

                {/*New Feature*/}
                <Row id="best-features" className=" block-example border-top  border-dark  bg-light mt-3" >
                    <Row className="text-center mt-1 d-flex justify-content-center">
                        <Col md={4} className="block-example border-bottom  border-dark">
                            <h2>New Feature</h2>
                        </Col>
                    </Row>
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


                {/* Updated Features*/}
                <Row id="best-features" className=" block-example border-top  border-dark  bg-light mt-3">
                    <Row className="mt-3 text-center d-flex justify-content-center">
                        <Col md={4} className="block-example border-bottom  border-dark mb-5" >
                            <h2>Updated Features</h2>
                        </Col>
                    </Row>

                    {loading ? <Loader />
                        : error ? <Message variant='danger'>{error}</Message>
                            : (
                                <Row className="">
                                    {software.map((software) => (
                                        <Col md={12} key={software._id} >
                                            <Feature software={software} />
                                        </Col>
                                    ))}
                                </Row>
                            )
                    }

                </Row>

                {/*Download Button 2*/}
                <Row className="text-center bg-light block-example border-top  border-dark  bg-light mt-3 ">

                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex justify-content-center">
                            {loading ? <Loader />
                                : error ? <Message variant='danger'>{error}</Message>
                                    : (
                                        <Col className="d-flex justify-content-center">
                                            {software.map((software) => (
                                                <Col key={software._id} >
                                                    <Buttonn software={software} />
                                                </Col>
                                            ))}
                                        </Col>
                                    )
                            }
                        </Col>
                    </Row>
                </Row>
            </main>
        </div>
    )
}

export default HomeScreen



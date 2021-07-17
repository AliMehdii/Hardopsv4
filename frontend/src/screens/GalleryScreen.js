import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'

function CoursesScreen() {
    return (
        <Container>
            <header>
                <Row className="text-center bg-light w-100">
                    <Row className="  d-flex justify-content-center bg-light w-100">
                        <Row className="d-flex justify-content-center" >
                            <Col md={10}>
                                <h1>Have a glimpse at some of our projects </h1>
                            </Col>
                        </Row>
                        <Row className="text-center d-flex justify-content-center">
                            <Col md={6}>
                                <h4>This is a General showcase of hardops's main features  </h4>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </header>

            <Row className="d-flex justify-content-center">
                <Col md={4} className=" mt-4 text-center block-example border-bottom  border-dark">
                    <h2>Showcase</h2>
                </Col>
            </Row>

            <main className="my-5">
                <Row md={12} className="d-flex justify-content-center">

                    <Col md={4} className=" my-2 d-flex align-self-center">
                        <Card className="">
                            <a href="images/carousel/image12.png" download>
                                <Card.Img src="images/carousel/image12.png" />

                                <Card.ImgOverlay className="text-light  d-flex justify-content-center  ">
                                    <Row className="text-center ">
                                        <Col className="text-center d-flex align-self-center"><h3>Pink Horse Head</h3></Col>
                                    </Row>
                                </Card.ImgOverlay>
                            </a>
                        </Card>
                    </Col>
                    <Col md={4} className=" d-flex align-self-center">
                        <Card className="">
                            <Card.Img src="images/carousel/image4.jpg" />
                            <Card.ImgOverlay className="text-light  d-flex justify-content-center  ">
                                <Row className="text-center ">
                                    <Col className="text-center d-flex align-self-center"><h3>Abstract Thingy</h3></Col>
                                </Row>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className=" d-flex align-self-center">
                        <Card className="">
                            <Card.Img src="images/carousel/image16.jpg" />
                            <Card.ImgOverlay className="text-light  d-flex justify-content-center  ">
                                <Row className="text-center ">
                                    <Col className="text-center d-flex align-self-center"><h3>Deadly POTATO</h3></Col>
                                </Row>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className=" my-3 d-flex align-self-center">
                        <Card className="">

                            <Card.Img src="images/carousel/image13.png" />
                            <Card.ImgOverlay className="text-light  d-flex justify-content-center  ">
                                <Row className="  text-center ">
                                    <Col className="text-center d-flex align-self-center"><h3>Something</h3></Col>
                                </Row>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className=" my-2 d-flex align-self-center">
                        <Card className="">

                            <Card.Img src="images/carousel/image5.png" />
                            <Card.ImgOverlay className="text-light  d-flex justify-content-center  ">
                                <Row className="text-center ">
                                    <Col className="text-center d-flex align-self-center"><h3>El RaCho MaQuin</h3></Col>
                                </Row>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} className=" d-flex align-self-center">
                        <Card className="">

                            <Card.Img src="images/carousel/image17.png" />
                            <Card.ImgOverlay className="text-light  d-flex justify-content-center  ">
                                <Row className="text-center ">
                                    <Col className="text-center d-flex align-self-center"><h3>SmallHips</h3></Col>
                                </Row>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>

                <Row className="my-4 py-4 bg-light text-center">
                    <Col md={12} className=" text-center"><h2 className=" mb-4 text-center">More Coming soon </h2></Col>
                    <Col md={12}>
                        <h4 className="mb-5">You can have a closer look at the creation of future projects on instagram</h4>
                        <a href="https://www.github.com" style={{ color: 'orange' }}><i class="fab fa-instagram fa-6x"></i></a>
                    </Col>
                </Row>
            </main>
        </Container>
    )
}

export default CoursesScreen

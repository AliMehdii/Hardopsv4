import React from 'react'
import { Row, Col, Image, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function AboutScreen() {
    return (

        <Row>
            <Row className="d-flex justify-content-center ">
                <Col md={4} className="text-center d-flex justify-content-center block-example border-bottom  border-dark">
                    <h1><strong>About us</strong></h1>
                </Col>
            </Row>

            <Row className="">
                <Col md={4} className="">

                </Col>
                <Row className="bg-light d-flex justify-content py-4 my-4">
                    <h4>The Project</h4>
                    <p className="px-5 ">Here at hardops we aspire to make the best 3D design and modeling software specialised in Hard surfaces modeling,
                    Rendering and 3D printing.
                    Here at hardops we aspire to make the best 3D design and modeling software specialised in Hard surfaces modeling,
                     Rendering and 3D printing</p>

                    <h4 className="py-2 ">Update Schedule</h4>
                    <p className="px-5">You can expect beta and alpha releases every month, stable releases every 3 months and finally Long term releases every 6 or 12 months
                    <ul>
                            <li>Alpha, Beta releases: <strong>every month</strong></li>
                            <li>Stable releases: every <strong>6 month</strong></li>
                            <li>LTS (long term releases): every <strong>6-12 month</strong>
                                <ul>
                                    <li>Duration of LTS: <strong>2 Years</strong></li>
                                </ul>
                            </li>
                        </ul>
                        - Checkout our releases <Link to='/previousVersions' style={{ color: 'orange' }}>history</Link>.
                    </p>

                    <h4 className="py-2 ">What we offer?</h4>
                    <p className="px-5">From our create 2 years ago, we have been working hard to offer a complete product
                    with a showcase of its features and enough documentation to encourage new comers to join our community.
                    but now we have comprehensive <Link to="/courses" style={{ color: 'orange' }}>Courses </Link> for all skill levels.
                    It doesn't stop here we also have a new <Link to='/store' style={{ color: 'orange' }}>store</Link> section where you can buy 3D Prints to see first hand what <Link to="/" style={{ color: 'orange' }}>HardOps</Link> is capable of, and at the same time support the development.</p>

                </Row>
            </Row>

            {/*The Team */}
            <Row className="d-flex justify-content-center">
                <Col md={10} className="text-center block-example border-bottom  border-dark my-4">
                    <h2 className="text-uppercase"><strong>Meet some of out team members</strong></h2>
                </Col>

                <Row>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="images/team/team1.jpg" />
                            <Card.Body>
                                <Card.Title><strong>ERIK JOHANSSON</strong></Card.Title>
                                <Card.Text>
                                    Pipeline TD, Head of Pipeline / Development
                                    Erik has been the beating heart of our technical pipeline ever since he joined our team in 2012. With a degree in “Master of Science in Media Technology and Engineering” from the University of Linköping, he has an amazing ability to improve and evolve the pipeline, constantly pushing the borders to make us even more efficient and reliable.
                                    He is probably Sweden’s biggest fan of the US sketch comedy series “Whitest Kids U’ Know”, having watched all five seasons three times.
                    </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="images/team/team2.jpg" />
                            <Card.Body>
                                <Card.Title><strong>ANNA THENBERG</strong></Card.Title>
                                <Card.Text>
                                    VFX Coordinator
                                    Anna started her journey in the VFX business in 2011, with studies at Campus i12 as her starting point. With 3D as her main focus, she went on to work in Denmark where she worked as an artist, but as time went, segued into production. Working for Duckling A/S and WilFilm ApS during her time in Denmark, LEGO was the client that developed her knowledge in commercial, short-format and long-format workflows.  Later on she moved to Germany to work as Jr VFX Coordinator, on projects such as “Thor: Ragnarok”, “Captain Marvel” and “Lost In Space”.
                                In 2018 she joined Goodbye Kansas Studios in Stockholm as a VFX Coordinator and has since worked on plenty of projects, including the multi-awarded “Overkill’s The Walking Dead” character trailers.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="images/team/team3.jpg" />
                            <Card.Body>
                                <Card.Title><strong>DAN ENGLESSON</strong></Card.Title>
                                <Card.Text>
                                    Dan got hooked on VFX as a teenager, creating his own 3D characters in his coastal hometown Öregrund in Sweden. One of his pics won a prize for ”Best Idea” at Blender World Cup 2010 and from that moment on he knew what he wanted to work with.
                                    He studied Master of Science in Media Technology and Engineering in Norrköping and loved how he could combine his creativity with his passion for the technical aspect of the craft. Dan has worked at MPC in London as software Engineer developing tools for the films "World War Z" and "The Jungle Book". Dan also worked at Pixar helping them develop and optimize their pipeline and renders for films like “The Good Dinosaur”, “Finding Dory” and “Coco” . In 2018 he decided it was time to come home, and so he joined The Goodbye Kansas team in Stockholm.
                                    Dan is not only a technical wizard, but also one of the fastest talents at Goodbye Kansas. As a teen he was a very successful athlete and in 2010 he was ranked the 20th fastest runner 200m in Sweden.
                    </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Row>
            </Row>

            {/*Follow us */}
            <Row className="text-center d-flex justify-content-center  w-100 mt-4">
                <Col md={8} className="text-center  block-example border-bottom  border-dark my-4 py-2">
                    <h2 className="text-uppercase"><strong>Find Us On Social Media</strong></h2>
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


            {/*Our partners */}
            <Row className="text-center d-flex justify-content-center  w-100 mt-4">
                <Col md={6} className="text-center  block-example border-bottom  border-dark my-4 py-2">
                    <h2 className="text-uppercase"><strong>Our Partners</strong></h2>
                </Col>
            </Row>
            <Row className="text-center bg-light d-flex justify-content-center py-4" >
                <Col md={6}>
                    <h4> These are our partners that help us in the developement and growth of Hardops</h4>
                </Col>
            </Row>
            <Row className="text-center bg-light d-flex justify-content-center pb-4" >
                <Col md={4} className="d-flex align-self-center justify-content-center ">
                    <a href="https://github.com/AliMehdii/HardopsSoftware" style={{ color: 'orange' }}><Image src="images/partners/ue4.png" alt="ue4" style={{ width: 200 }} /></a>
                </Col>
                <Col md={4} className="d-flex align-self-center justify-content-center ">
                    <a href="https://github.com/AliMehdii/HardopsSoftware" style={{ color: 'orange' }}><Image src="images/partners/dell.svg" alt="dell" style={{ height: 100 }} /></a>
                </Col>
                <Col md={4} className="d-flex align-self-center justify-content-center ">
                    <a href="https://github.com/AliMehdii/HardopsSoftware" style={{ color: 'orange' }}><Image src="images/partners/turbosquid.svg" alt="turbosquid" style={{ height: 150 }} /></a>
                </Col>
            </Row>

        </Row>
    )
}

export default AboutScreen

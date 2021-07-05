import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <Container>
                <Card>
                    <Card.Header className="text-center py-3" as="h5">More Info</Card.Header>
                    <Card.Body className="text-center py-3">
                        <Row>
                            <Col>
                                <Card.Title>Contact Us</Card.Title>
                                <Card.Text className="d-flex justify-content-center">
                                    <Col md={10} className="text-left ">
                                        <div>
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Home</Link><br />
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Hardops@gmail.com</Link><br />
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>93  Rue de Verdun</Link><br />
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>222-555-0120</Link><br />
                                        </div>
                                    </Col>
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Social</Card.Title>
                                <Card.Text className="d-flex justify-content-center">
                                    <Col md={10} className="text-left ">
                                        <div>
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Twitter</Link><br />
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Instagram</Link><br />
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Facebook</Link><br />
                                        </div>
                                    </Col>
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Hardops</Card.Title>
                                <Card.Text className="d-flex justify-content-center">
                                    <Col md={10} className="text-center ">
                                        <div>
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Github repository</Link><br />
                                            <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Gumroad</Link>
                                        </div>
                                    </Col>
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title>Navigate</Card.Title>
                                <Card.Text className="d-flex justify-content-center">
                                    <Col md={10} className="text-center ">
                                        <div>
                                            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link><br />
                                            <Link to="/store" style={{ color: 'black', textDecoration: 'none' }}>Store</Link><br />
                                            <Link to="/download" style={{ color: 'black', textDecoration: 'none' }}>Download</Link><br />
                                            <Link to="/courses" style={{ color: 'black', textDecoration: 'none' }}>Courses</Link><br />
                                            <Link to="/profile" style={{ color: 'black', textDecoration: 'none' }}>Profile</Link><br />
                                        </div>
                                    </Col>
                                </Card.Text>
                            </Col>

                            <Col>
                                <Card.Title>Legal</Card.Title>
                                <Card.Text>
                                    <Link to="/privacy" style={{ color: 'black', textDecoration: 'none' }}>Privacy Policy</Link>
                                </Card.Text>
                            </Col>
                        </Row>
                        <footer className="blockquote-footer text-center pt-4">
                            Copyright &copy; 2021 HarOps
                        </footer>
                    </Card.Body>
                </Card>
            </Container>
        </footer>
    )
}

export default Footer

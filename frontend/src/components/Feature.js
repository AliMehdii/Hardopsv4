import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


function Product({ software }) {
    return (
        <Row md={12}>

            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={software.image1} />
                    <Card.Body>
                        <Card.Title>{software.feature1}</Card.Title>
                        <Card.Text>
                            {software.description1}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={software.image2} />
                    <Card.Body>
                        <Card.Title>{software.feature2}</Card.Title>
                        <Card.Text>
                            {software.description2}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={software.image3} />
                    <Card.Body>
                        <Card.Title>{software.feature3}</Card.Title>
                        <Card.Text>
                            {software.description3}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    )
}

export default Product

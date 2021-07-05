import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'


function Product({ course }) {
    return (
        <section className="bg-secondary">
            <Row className="block-example  border-dark" >
                <Col className="mt-4 mb-1 ">
                    <Image src={course.thumbnail} fluid />
                </Col>
                <Col md={6}><Col className="text-center mt-5">
                    <h2>{course.name}</h2>
                </Col>
                    <Col className="text-left  text-mute rounded my-5" md={12}>
                        <Col className="mx-5 px-5 my-4 pt-2 d-flex justify-content-left" ><h3><li>{course.length} Hours of video content</li></h3></Col>
                        <Col className="mx-5 px-5 my-4 d-flex justify-content-left" ><h3><li>{course.level} Level</li></h3></Col>
                        <Col className="mx-5 px-5 my-4 d-flex justify-content-left" ><h3><li>Full Blocking process</li></h3></Col>
                        <Col className="mx-5 px-5 my-4 d-flex justify-content-left" ><h3>{course.projectFilesAvailable ? <li>Project Files Available</li> : <li>Project Files Unavailable</li>}</h3></Col>
                        <Col className="mx-5 px-5 my-4 pt-4 d-flex justify-content-center"><h3>- {course.author} -</h3></Col>
                        <Col className="mx-5 px-5 my-5 d-flex justify-content-center">
                            <a className="gumroad-button" href={course.link} target="_blank">Buy now for ${course.price}</a>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </section>
    )
}

export default Product

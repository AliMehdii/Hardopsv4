import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ software }) {
    return (
        <Row className="d-flex justify-content-center">
            <Row className="d-flex justify-content-center bg-light ">
                <Row className="  d-flex justify-content-center" >
                    <Col md={12}>
                        <h1>The open source software made by the community</h1>
                    </Col>
                </Row>
                <Row className=" my-2 text-center d-flex justify-content-center">
                    <Col md={6}>
                        <h4>Join the adventure and contribute to the developement and growth of the open source community of artist.</h4>
                    </Col>
                </Row>
            </Row>
            <Row className='py-2'>
                <Col className="d-flex justify-content-center">
                    <Button size="lg" variant="info">
                        <Row className='pb-1'>
                            <Col>Get HarOps for Windows</Col>
                        </Row>
                        <Row className="">
                            <Col>
                                <h5 className="  text-center text-dark">
                                    Version {software.version}
                                </h5>
                            </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
            <Row className="my-3">
                <Col >
                    You can also check out
                    <Link to="/previousVersions" style={{ color: 'orange' }} className=' mx-1'>previous versions</Link>
                    , and the
                    <a style={{ color: 'orange' }} href="https://github.com/AliMehdii/HardopsSoftware" className=' mx-1'>Github repository</a>

                </Col>
            </Row>
        </Row>

    )
}

export default Product

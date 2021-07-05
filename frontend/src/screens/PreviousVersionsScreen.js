import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Table, Button } from 'react-bootstrap'

import { listPreviousVersions } from '../actions/softwareActions'

function PreviousVersionsScreen({ match }) {
    const dispatch = useDispatch()
    const listVersions = useSelector(state => state.listVersions)
    const { software: previous } = listVersions
    useEffect(() => {
        dispatch(listPreviousVersions(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            {/*Carousel*/}
            <header className="mb-4">
                <Row >
                    <Row className="d-flex justify-content-center">
                        <Col className="text-center"><h2>Previous Versions</h2></Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={6} className="text-center">
                            <h4>Here you will have access to all previous versions including current stable and Long term releases(LTS),
                            you can also check out upcomming features in Beta and Alpha vesions. </h4>
                        </Col>
                    </Row>
                </Row>
            </header>


            {/*Previous Versions Table*/}
            <main>
                <Row className="pt-4">
                    <Table responsive hover size="sm">
                        <tbody>
                            {previous.map((software) => (
                                <tr >
                                    <td className="text-center"><a style={{ color: 'black' }} href="https://github.com/AliMehdii/HardopsSoftware">{software.name}</a></td>
                                    <td className="text-center">{software.version}</td>
                                    <td className="text-center">{software.releasedAt.substring(0, 10)}</td>
                                    <td className="text-center">{software.mainFeature}</td>
                                    {(
                                        software.status === 'LTS' ? (<td className="text-center text-success">{software.status}</td>) :
                                            software.status === 'stable' ? (<td className="text-center text-info">{software.status}</td>) :
                                                software.status === 'alpha' ? (<td className="text-center text-primary">{software.status}</td>) :
                                                    software.status === 'beta' && (<td className="text-center text-warning">{software.status}</td>)
                                    )}
                                    <td className="text-center">{software.downloadSize} MB</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>

                {/*Follow us */}
                <Row className="text-center block-example border-top  border-dark w-100 mt-4">
                    <Col className="text-center py-2">
                        <h2>Follow HardOps Development</h2>
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
                        <a href="https://www.github.com" style={{ color: 'orange' }}><i class="fab fa-twitter  fa-5x"></i></a>
                    </Col>
                    <Col md={4}>
                        <a href="https://www.github.com" style={{ color: 'orange' }}><i class="fab fa-facebook-f fa-5x"></i></a>
                    </Col>
                    <Col md={4}>
                        <a href="https://www.github.com" style={{ color: 'orange' }}><i class="fab fa-instagram fa-5x"></i></a>
                    </Col>
                </Row>

                {/*Support HardOps*/}
                <Row className="text-center block-example border-top  border-dark w-100 mt-4">
                    <Col className="text-center py-2">
                        <h2>Support HardOps Development</h2>
                    </Col>
                </Row>
                <Row className="text-center bg-light d-flex justify-content-center py-4" >
                    <Col md={6}>
                        <h4>By donating you will enable the Hardops team to work full time on it and also hire more developmers.</h4>
                    </Col>
                </Row>
                <Row className="text-center bg-light d-flex justify-content-center  mb-2 " >
                    <Col>
                        <a href="https://www.github.com" className=""> <Button className="mb-4" variant="warning">Thank you</Button> </a>
                    </Col>
                </Row>

            </main>
        </div>
    )
}

export default PreviousVersionsScreen



import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Course from '../components/Course'
import CourseLeft from '../components/CourseLeft'
import GumroadFollow from '../components/GumroadFollow'
import { listCourseDetails, latestCourseAction } from '../actions/courseActions'
import { listBlogs } from '../actions/blogActions'

function CoursesScreen({ match }) {

    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const { error, loading, course } = courseList

    const latestCourse = useSelector(state => state.latestCourse)
    const { course: crs } = latestCourse

    const blogList = useSelector(state => state.blogList)
    const { error: bError, loading: bLoading, blogs } = blogList

    useEffect(() => {
        dispatch(listCourseDetails(match.params.id))
        dispatch(latestCourseAction(match.params.id))
        dispatch(listBlogs(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            <header>
                {/*Latest Course*/}
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
                                                    <h1 className="d-flex justify-content-center"><strong style={{ color: '#D07E1E' }} className="text-uppercase">{course.name}</strong></h1>
                                                </Card.Title>
                                            </Col>
                                        </Row>
                                        <Row className=" d-flex justify-content-center">
                                            <Col style={{ opacity: 1 }} className="   text-dark-50 rounded d-flex justify-content-center" md={8} >
                                                <Row className="d-flex justify-content-center" >
                                                    <Col md={12} className="block-example border-top  border-mute px-2">
                                                        <Card.Text className=" pt-4 text-light d-flex justify-content-center mx-5 " >
                                                            <h6><strong className="mt-2">{course.length} hours of video content</strong></h6>
                                                        </Card.Text>
                                                        <Card.Text className=" text-light  mx-5 d-flex justify-content-center">
                                                            <h6><strong> {course.level} level</strong></h6>
                                                        </Card.Text>
                                                        <Card.Text className=" text-light  mx-5 d-flex justify-content-center">
                                                            <h6><strong> Full blocking process</strong></h6>
                                                        </Card.Text>
                                                        <Card.Text className="text-light mx-5 d-flex justify-content-center">
                                                            <h6><strong >By {course.author}</strong></h6>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="block-example border-top  border-mute mt-4 ">t</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="mx-5 px-3 d-flex justify-content-center ">
                                            <Col className="my-5 mx-4 d-flex justify-content-center ">
                                                <a class="gumroad-button" href={course.link} target="_blank">Buy now for {course.price}</a>
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
            </header>

            {/*More Courses*/}
            <Row className='text-center mt-3 d-flex justify-content-center'>
                <Col md={4} className="text-center block-example border-bottom  border-dark mb-2">
                    <h2 >More Courses</h2>
                </Col>
            </Row>

            {/*Course 1*/}
            <Row>
                <Col>
                    {course.map((course) => (
                        course.length % 2 === 0 ?
                            (<Col key={course._id} >
                                <Course course={course} />
                            </Col>
                            ) : (<Col key={course._id} >
                                <CourseLeft course={course} />
                            </Col>)
                    ))}
                </Col>
            </Row>


            <Row className="d-flex justify-content-center my-4">
                <Col md={6} className="text-center block-example border-bottom  border-dark">
                    <h2>Read more about our projects</h2>
                </Col>
            </Row>


            <Row className="text-left d-flex justify-content-center">
                {blogs && blogs.map((blog) => (
                    <Col md={4} className="text-left d-flex justify-content-left" key={blog._id} >
                        <CardGroup>
                            <Card className=' my-3 rounded text-left d-flex justify-content-left' text='dark'  >
                                <Link to={`/blog/${blog._id}`} >
                                    <Card.Img style={{ height: 200 }} className="mb-2" variant='top' src={blog.image1}></Card.Img>
                                </Link>

                                <Card.Title className="d-flex justify-content-left" >
                                    <Link to={`/blog/${blog._id}`} style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ color: 'red' }}>
                                        <Row className="d-flex justify-content-left px-3 my-2" >
                                            <Col className="d-flex justify-content-left " >
                                                <h4 className="text-left"><strong>{blog.title}</strong></h4>
                                            </Col>
                                        </Row>
                                    </Link>
                                </Card.Title>

                                <Card.Body>
                                    <Row className="d-flex justify-content-left  my-2" >
                                        <Col className="d-flex justify-content-left " >

                                            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Footer>
                                    <Row className=" ">
                                        <Col md={10} style={{ color: 'grey' }} className="d-flex justify-content-left ">
                                            {blog.createdAt && blog.createdAt.substring(0, 10)} | {blog.timeToRead} min read
                                        </Col>
                                        <Col md={2} className="text-right d-flex justify-content-right ">
                                            <p className="text-right"> </p>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                ))}
            </Row>

            <Row className="d-flex justify-content-center my-5">
                <GumroadFollow />
            </Row>

        </div>

    )
}

export default CoursesScreen

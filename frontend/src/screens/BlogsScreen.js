import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, CardGroup, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Components

// Actions
import { listBlogs, listBlogDetails } from '../actions/blogActions'

function BlogsScreen({ match, history }) {

    const dispatch = useDispatch()
    const blogList = useSelector(state => state.blogList)
    const { error, loading, blogs } = blogList


    useEffect(() => {
        dispatch(listBlogs(match.params.id))
    }, [dispatch, match])



    return (
        <div>
            <Row className="my-4   ">
                <Row className="d-flex justify-content-center">
                    <Col md={6} className="text-center block-example border-bottom  border-dark">
                        <h2>Behind the scenes</h2>
                    </Col>
                </Row>
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
        </div>
    )
}

export default BlogsScreen
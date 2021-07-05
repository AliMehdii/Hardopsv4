import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Container, Card, CardGroup } from 'react-bootstrap'

//Components
import Loader from '../components/Loader'
import Message from '../components/Message'
import BlogTag from '../components/BlogTag'
import { listBlogDetails } from '../actions/blogActions'


function BlogsDetailsScreen({ match }) {

    const dispatch = useDispatch()

    const blogDetails = useSelector(state => state.blogDetails)
    const { error, loading, blog, tag_list, suggBlogs } = blogDetails

    useEffect(() => {
        dispatch(listBlogDetails(match.params.id))
    }, [dispatch, match])

    return (
        <Container >

            <Row>
                {loading ? <Loader />
                    : error ? <Message variant='danger' >{error}</Message>
                        : (
                            <Row className="d-flex justify-content-center">
                                <Row>
                                    <Row className="d-flex justify-content-center mt-2">
                                        <Col md={2} className="d-flex justify-content-center text-center">
                                            <p style={{ color: 'grey', fontSize: 14 }}>{blog.createdAt && blog.createdAt.substring(0, 10)}</p>
                                        </Col>
                                    </Row>

                                    <Row className="d-flex justify-content-center mb-4">
                                        <Col md={6} className="d-flex justify-content-center text-center ">
                                            <h2>{blog.title}</h2>
                                        </Col>
                                    </Row>

                                    <Row className="d-flex justify-content-center mb-2">
                                        <Col md={4} className="d-flex justify-content-center mb-2">
                                            <Image src={blog.image1} style={{ width: 1000 }} rounded />
                                        </Col>
                                    </Row>


                                    <Row className="d-flex justify-content-center mb-4">
                                        <Col md={8} className="d-flex justify-content-center text-center">
                                            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                        </Col>
                                    </Row>


                                    {/*Tags */}
                                    <Row className="d-flex justify-content-center">
                                        {loading ? <Loader />
                                            : error ? <Message variant='danger' >{error}</Message>
                                                : (
                                                    <Row className="text-center d-flex justify-content-center">
                                                        <Col md={4} className="text-center d-flex justify-content-center ">
                                                            {tag_list && tag_list.map((tag) => (
                                                                <Col md={6} className="text-center d-flex justify-content-center" key={tag._id} >
                                                                    <BlogTag tag={tag} />
                                                                </Col>
                                                            ))}
                                                        </Col>
                                                    </Row>
                                                )}
                                    </Row>

                                    <Row className="d-flex justify-content-center my-5">
                                        <Col md={10}>
                                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                        </Col>
                                    </Row>


                                </Row>
                            </Row>
                        )
                }
            </Row>

            {/*Suggested blogs */}
            <Row className="text-center d-flex justify-content-center mt-4">
                <Col md={4} className="text-center d-flex justify-content-center block-example border-bottom  border-dark">
                    <h2>Simmilar Blogs</h2>
                </Col>
            </Row>

            <Row className="text-left d-flex justify-content-center">
                {suggBlogs && suggBlogs.map((sugg) => (
                    <Col md={4} className="text-left d-flex justify-content-left" key={sugg._id} >
                        <CardGroup>
                            <Card className=' my-3 rounded text-left d-flex justify-content-left' text='dark'  >
                                <Link to={`/blog/${sugg._id}`} >
                                    <Card.Img style={{ height: 200 }} className="mb-2" variant='top' src={sugg.image1}></Card.Img>
                                </Link>

                                <Card.Title className="d-flex justify-content-left" >
                                    <Link to={`/blog/${sugg._id}`} style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ color: 'red' }}>
                                        <Row className="d-flex justify-content-left px-3 my-2" >
                                            <Col className="d-flex justify-content-left " >
                                                <h4 className="text-left"><strong>{sugg.title}</strong></h4>
                                            </Col>
                                        </Row>
                                    </Link>
                                </Card.Title>

                                <Card.Body>
                                    <Row className="d-flex justify-content-left  my-2" >
                                        <Col className="d-flex justify-content-left " >

                                            <div dangerouslySetInnerHTML={{ __html: sugg.description }} />
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Footer>
                                    <Row className=" ">
                                        <Col md={10} style={{ color: 'grey' }} className="d-flex justify-content-left ">
                                            {sugg.createdAt && sugg.createdAt.substring(0, 10)} | {sugg.timeToRead} min read
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
        </Container>
    )
}
export default BlogsDetailsScreen

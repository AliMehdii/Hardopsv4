import React, { useState } from 'react'
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {

    // this is the keyword the we are gonna input in the search bar
    // We set it's default state to an empty string
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();
        // if you types a keyword in the search bar
        if (keyword) {
            // Here we added 'page=1' in the call so that when ever we 'submit' a search we always 'start' by 'page1' 
            history.push(`/store/?keyword=${keyword}&page=1`)
            // else if we dont have a keyword in the search box then we redirect the user to the page he is already in 
            // So we basically keep the use in the same page 
        } else {
            history.push(history.push(history.location.pathname))
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <Row>
                <Col md={8}>
                    <FormControl
                        className='mx-5'
                        type="text"
                        placeholder='Search'
                        name='q'
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Button type='submit' variant="outline-warning" className='p-2 mx-5' size="sm">Search</Button>
                </Col>
            </Row>
        </Form>

    )
}

export default SearchBox

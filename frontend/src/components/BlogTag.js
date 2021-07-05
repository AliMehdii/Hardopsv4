import React from 'react'
import { Button } from 'react-bootstrap'

function BlogTag({ tag }) {

    return (
        <h5><Button size="sm" variant="warning">{tag.tag} </Button></h5>
    )
}

export default BlogTag
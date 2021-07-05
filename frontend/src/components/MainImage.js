import React from 'react'
import { Image } from 'react-bootstrap'

function Product({ software }) {
    return (
        <Image src={software.mainFeatureImage} fluid />
    )
}
export default Product

import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// Inside of the component we want to destructer to pass in these props 
// for keyword we want to set the default to and empty string
function Paginate({ pages, page, keyword = '' }) {

    // Here we are doing a little trimming and clean up to only get the 'Keyword' 
    // Because for exemple in the URL the keyword => '?keyword=star&page=1' but we only want the keyword 'star'  
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    // Here we want to make sure to only 'display' the 'pagination component' only of we have 'more than' '1 pages'
    // then we want to use the array constructor to make an array out of the page number so if we have '10 pages' we will have 10 'pagination buttons'
    return (pages > 1 && (
        <Pagination className="d-flex justify-content-center">
            {[...Array(pages).keys()].map((x) => (
                <LinkContainer
                    key={x + 1}
                    to={`store/?keyword=${keyword}&page=${x + 1}`}
                >
                    <Pagination.Item variant="warning" active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
    )
}

export default Paginate

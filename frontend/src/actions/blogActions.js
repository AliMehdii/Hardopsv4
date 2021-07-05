import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,

    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,

    BLOG_TOP_REQUEST,
    BLOG_TOP_SUCCESS,
    BLOG_TOP_FAIL,
} from '../constants/blogConstants'
import axios from 'axios'


export const listBlogs = () => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_LIST_REQUEST
        })

        const { data } = await axios.get(`/api/blogs/`)

        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }

}



export const listTopBlogs = () => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_TOP_REQUEST
        })

        const { data } = await axios.get(`/api/blogs/top/`)

        dispatch({
            type: BLOG_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }

}


export const listBlogDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/blogs/${id}`)

        dispatch({
            type: BLOG_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}
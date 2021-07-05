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


export const blogListReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_LIST_REQUEST:
            return { loading: true, blogs: [] }

        case BLOG_LIST_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
            }

        case BLOG_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const blogDetailsReducer = (state = { blog: { tag_list: [], suggBlogs: [] } }, action) => {
    switch (action.type) {
        case BLOG_DETAILS_REQUEST:
            return { loading: true, ...state }

        case BLOG_DETAILS_SUCCESS:
            return {
                loading: false,
                blog: action.payload.blog,
                tag_list: action.payload.tag_list,
                suggBlogs: action.payload.suggBlogs,
            }

        case BLOG_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const blogTopRatedReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_TOP_REQUEST:
            return { loading: true, blogs: [] }

        case BLOG_TOP_SUCCESS:
            return { loading: false, blogs: action.payload }

        case BLOG_TOP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
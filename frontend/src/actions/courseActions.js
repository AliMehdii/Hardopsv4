import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,

    COURSE_LATEST_REQUEST,
    COURSE_LATEST_SUCCESS,
    COURSE_LATEST_FAIL,
} from '../constants/courseConstants'
import axios from 'axios'

export const latestCourseAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LATEST_REQUEST })

        const { data } = await axios.get(`/api/courses/course/`)

        dispatch({
            type: COURSE_LATEST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COURSE_LATEST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}


export const listCourseDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: COURSE_LIST_REQUEST
        })

        const { data } = await axios.get(`/api/courses/`)

        dispatch({
            type: COURSE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COURSE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }

}
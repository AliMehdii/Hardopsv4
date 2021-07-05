import {

    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,


    COURSE_LATEST_REQUEST,
    COURSE_LATEST_SUCCESS,
    COURSE_LATEST_FAIL,


} from '../constants/courseConstants'

export const latestCourseReducer = (state = { course: [] }, action) => {
    switch (action.type) {
        case COURSE_LATEST_REQUEST:
            return { loading: true, ...state }

        case COURSE_LATEST_SUCCESS:
            return { loading: false, course: action.payload }

        case COURSE_LATEST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const courseListReducer = (state = { course: [] }, action) => {
    switch (action.type) {
        case COURSE_LIST_REQUEST:
            return { loading: true, course: [] }

        case COURSE_LIST_SUCCESS:
            return {
                loading: false,
                course: action.payload
            }

        case COURSE_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

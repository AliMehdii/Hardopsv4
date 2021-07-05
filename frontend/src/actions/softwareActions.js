import {

    SOFTWARE_DETAILS_REQUEST,
    SOFTWARE_DETAILS_SUCCESS,
    SOFTWARE_DETAILS_FAIL,

    SOFTWARE_PREVIOUS_REQUEST,
    SOFTWARE_PREVIOUS_SUCCESS,
    SOFTWARE_PREVIOUS_FAIL,


} from '../constants/softwareConstants'
import axios from 'axios'

export const listVersionDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SOFTWARE_DETAILS_REQUEST })

        const { data } = await axios.get('/api/versions/version/')

        dispatch({
            type: SOFTWARE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SOFTWARE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listPreviousVersions = (id) => async (dispatch) => {
    try {
        dispatch({
            type: SOFTWARE_PREVIOUS_REQUEST
        })

        const { data } = await axios.get(`/api/versions/`)

        dispatch({
            type: SOFTWARE_PREVIOUS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SOFTWARE_PREVIOUS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}
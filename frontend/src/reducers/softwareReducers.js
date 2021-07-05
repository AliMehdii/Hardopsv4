import {

    SOFTWARE_DETAILS_REQUEST,
    SOFTWARE_DETAILS_SUCCESS,
    SOFTWARE_DETAILS_FAIL,

    SOFTWARE_PREVIOUS_REQUEST,
    SOFTWARE_PREVIOUS_SUCCESS,
    SOFTWARE_PREVIOUS_FAIL,

} from '../constants/softwareConstants'

export const latestVersionReducer = (state = { software: [] }, action) => {
    switch (action.type) {
        case SOFTWARE_DETAILS_REQUEST:
            return { loading: true, ...state }

        case SOFTWARE_DETAILS_SUCCESS:
            return { loading: false, software: action.payload }

        case SOFTWARE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const listVersionsReducer = (state = { software: [] }, action) => {
    switch (action.type) {
        case SOFTWARE_PREVIOUS_REQUEST:
            return { loading: true, software: [] }

        case SOFTWARE_PREVIOUS_SUCCESS:
            return {
                loading: false,
                software: action.payload

            }

        case SOFTWARE_PREVIOUS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

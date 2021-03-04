import {SET_ALERT} from "./types";

const initialState = {
    success: false,
    message: '',
    timestamp: ''
}

const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                ...action.data,
                timestamp: Date.now()
            }

        default:
            return {
                ...state
            }
    }
}

export default AlertReducer
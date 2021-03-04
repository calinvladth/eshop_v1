import {GET_CONFIG} from "./types";

const initialState = {
    success: false,
    message: '',
    data: {
        payment: {
            currency: ''
        }
    },
    loaded: false
}

const ConfigReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONFIG:
            return {
                ...state,
                ...action.data,
                loaded: true
            }

        default:
            return {
                ...state
            }

    }

}

export default ConfigReducers
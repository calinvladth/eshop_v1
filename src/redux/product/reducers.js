import {CLEAR_PRODUCT_STATE, PRODUCT_GET_SUCCESS} from "./types";

const initialState = {
    success: false,
    message: '',
    data: {},
    loaded: false
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_GET_SUCCESS:
            return {
                ...state,
                ...action.data,
                loaded: true
            }

        case CLEAR_PRODUCT_STATE:
            return {
                ...initialState,
            }
            
        default:
            return {
                ...state
            }
    }
}

export default ProductReducer

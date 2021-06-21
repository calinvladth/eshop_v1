import {CLEAR_RELATED_PRODUCTS, GET_RELATED_PRODUCTS} from "./types";

const initialState = {
    success: false,
    message: '',
    data: [],
    loaded: false
}

const RelatedProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RELATED_PRODUCTS:
            return {
                ...state,
                ...action.data,
                loaded: true
            }

        case CLEAR_RELATED_PRODUCTS:
            return {
                ...initialState
            }

        default:
            return {
                ...state
            }
    }
}
export default RelatedProductsReducer
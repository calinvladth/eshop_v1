import {PRODUCTS_GET_SUCCESS} from "./types";

const initialState = {
    success: false,
    message: '',
    data: [],
    pagination: {},
    filters: {},
    loaded: false
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_GET_SUCCESS:
            return {
                ...state,
                ...action.data,
                data: action.data.data,
                pagination: action.data.pagination,
                filters: action.data.filters,
                loaded: true
            }

        default:
            return {
                ...state
            }
    }
}

export default ProductsReducer

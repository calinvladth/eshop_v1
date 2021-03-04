import {PRODUCTS_GET_SUCCESS} from "./types";
import {pagination} from "./services";

const initialState = {
    success: false,
    message: '',
    data: [],
    pagination: {},
    filters: {}
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_GET_SUCCESS:
            return {
                ...state,
                ...action.data,
                data: pagination(action.data.data, action.limit, action.page),
                pagination: {
                    limit: action.limit,
                    total_pages: Math.ceil(action.data.data.length / action.limit),
                    total_items: action.data.data.length
                },
                filters: action.filters
            }

        default:
            return {
                ...state
            }
    }
}

export default ProductsReducer

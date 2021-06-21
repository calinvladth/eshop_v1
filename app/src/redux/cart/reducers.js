import {RENDER_CART_DATA} from "./types";

const initialState = {
    success: false,
    message: '',
    data: {
        products: [],
        total_price: null,
        total_quantity: null
    }
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDER_CART_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return {
                ...state
            }
    }
}

export default CartReducer
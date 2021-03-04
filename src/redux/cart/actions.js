import axios from "axios";
import {
    checkProductInCart,
    getCartFromLocalStorages,
    removeCartProduct,
    updateCartInLocalStorage,
    updateCartProductQuantity,
    updateCartProductQuantityFull
} from "./services";
import {ERROR_CART_DATA, RENDER_CART_DATA} from "./types";
import {api} from "../../config";
import {SetAlert} from "../alerts/actions";

export const PostCartItem = (id, quantity = 1, full_quantity = false, from_shop=false) => (dispatch, getState) => {

    let cart = getCartFromLocalStorages()
    const filteredCart = checkProductInCart(id, cart)
    if (filteredCart.length === 0) {
        cart.push({product: id, quantity: quantity})
    } else {
        const data = {product: id, quantity: quantity}
        full_quantity ? updateCartProductQuantityFull(data, cart) : updateCartProductQuantity(data, cart)
    }

    updateCartInLocalStorage(cart)

    dispatch(RenderCartData())

    if (from_shop) {
        dispatch(SetAlert({
            success: true,
            message: 'Cart was updated'
        }))
    }
}

export const RemoveCartItem = (id) => (dispatch, getState) => {
    let cart = getCartFromLocalStorages()
    let newCart = removeCartProduct(id, cart)
    updateCartInLocalStorage(newCart)
    dispatch(RenderCartData())
}


// Render Cart
export const RenderCartData = () => (dispatch, getState) => {
    const cart = localStorage.getItem('cart')
    const cart_json = JSON.parse(cart)
    axios({
        method: 'POST',
        url: `${api}/cart/render_data/`,
        data: cart_json
    })
        .then(response => dispatch({type: RENDER_CART_DATA, data: response.data}))
        .catch(error => dispatch({type: ERROR_CART_DATA, data: error.response}))
}
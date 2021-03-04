export const getCartFromLocalStorages = () => {
    let cart = localStorage.getItem('cart')
    const cart_json = JSON.parse(cart)

    if (!isArray(cart_json)) {
        localStorage.setItem('cart', JSON.stringify([]))
    }

    cart = JSON.parse(localStorage.getItem('cart'))


    return cart
}

export const checkProductInCart = (product, cart) => {
    return cart.filter(o => {
        return o.product === product
    })
}

export const updateCartInLocalStorage = (cart) => {
    const cart_str = JSON.stringify(cart)
    localStorage.setItem('cart', cart_str)
}

export const updateCartProductQuantity = (data = {}, cart = []) => {
    let obj = cart.filter(o => o.product === data.product)[0]
    obj.quantity = obj.quantity + data.quantity
    return obj
}

export const updateCartProductQuantityFull = (data = {}, cart = []) => {
    let obj = cart.filter(o => o.product === data.product)[0]
    obj.quantity = data.quantity
    return obj
}

export const removeCartProduct = (id, cart = []) => {
    let obj = cart
    for (let i = 0; i < obj.length; i++) {
        if ( obj[i].product === id) {
            obj.splice(i, 1);
            i--;
        }
    }
    return obj
}

function isArray(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Array;
}
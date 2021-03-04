import axios from "axios";
import {CLEAR_RELATED_PRODUCTS, GET_RELATED_PRODUCTS} from "./types";
import {api} from "../../config";

export const GetRelatedProducts = ({category, product}) => (dispatch, getState) => {
    axios({
        method: 'POST',
        url: `${api}/product_categories/related/`,
        data: {
            category: category,
            product: product,
            shop: process.env.REACT_APP_SHOP_NAME
        }
    })
        .then(response => {
            dispatch({type: GET_RELATED_PRODUCTS, data: response.data})
        })
        .catch(error => console.log('ERROR GETTING RELATED PRODUCTS'))
}

export const ClearRelatedProductsState = () => (dispatch) => {
    dispatch({type: CLEAR_RELATED_PRODUCTS})
}
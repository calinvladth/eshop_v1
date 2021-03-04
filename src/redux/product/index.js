import axios from 'axios'
import {api} from "../../config";
import {CLEAR_PRODUCT_STATE, PRODUCT_GET_FAIL, PRODUCT_GET_SUCCESS} from "./types";


export const GetProductByPk = (id) => (dispatch, getState) => {
    axios({
        method: 'GET',
        url: `${api}/products/${id}/?active=true&shop=${process.env.REACT_APP_SHOP_NAME}`
    })
        .then(response => dispatch({type: PRODUCT_GET_SUCCESS, data: response.data}))
        .catch(error => dispatch({type: PRODUCT_GET_FAIL, data: error.response}))
}

export const ClearProductState = () => (dispatch) => {
    dispatch({type: CLEAR_PRODUCT_STATE})
}
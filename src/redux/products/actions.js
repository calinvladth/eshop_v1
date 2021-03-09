import axios from 'axios'
import {PRODUCTS_GET_FAIL, PRODUCTS_GET_SUCCESS} from "./types";
import {api} from "../../config";
import {addQuery} from "../../services/url";


export const GetProducts = (page = 1, filters = {}) => (dispatch, getState) => {
    filters['active'] = true
    filters['shop'] = process.env.REACT_APP_SHOP_NAME
    filters['page'] = page
    const str = addQuery(filters)
    axios({
        method: 'GET',
        url: `${api}/products/?${str}`
    })
        .then(response => {
            dispatch({
                type: PRODUCTS_GET_SUCCESS,
                data: response.data,
            })
        })
        .catch(error => {
            dispatch({type: PRODUCTS_GET_FAIL, data: error.response})
        })
}


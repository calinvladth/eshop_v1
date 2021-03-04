import axios from 'axios'
import {PRODUCTS_GET_FAIL, PRODUCTS_GET_SUCCESS} from "./types";
import {api} from "../../config";


export const GetProducts = (page = 1, filters = {}) => (dispatch, getState) => {
    filters['active'] = true
    filters['shop'] = process.env.REACT_APP_SHOP_NAME
    let str = "";
    for (let key in filters) {
        if (str !== "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(filters[key]);
    }
    axios({
        method: 'GET',
        url: `${api}/products/?${str}`
    })
        .then(response => {
            const {config: {data: {pagination}}} = getState()
            dispatch({
                type: PRODUCTS_GET_SUCCESS,
                data: response.data,
                page: page,
                limit: pagination.items_store,
                filters: filters
            })
        })
        .catch(error => {
            dispatch({type: PRODUCTS_GET_FAIL, data: error.response})
        })
}


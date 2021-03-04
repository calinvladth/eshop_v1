import {combineReducers} from "redux";
import ProductsReducer from "./products/reducers";
import ProductReducer from "./product/reducers";
import CartReducer from "./cart/reducers";
import AlertReducer from "./alerts/reducers";
import ConfigReducers from "./config/reducers";
import RelatedProductsReducer from "./related_products/reducers";

const allReducers = combineReducers({
    config: ConfigReducers,
    alerts: AlertReducer,
    products: ProductsReducer,
    related_products: RelatedProductsReducer,
    product: ProductReducer,
    cart: CartReducer,
})

export default allReducers
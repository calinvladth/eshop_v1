import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from "./index";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    allReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // process.env.REACT_APP_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
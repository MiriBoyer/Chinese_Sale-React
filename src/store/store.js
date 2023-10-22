import { combineReducers, createStore } from "redux"
import { productsReducer } from "./ProductSlice/ProductSlice.js"
import { userReducer } from "./UserSlice/UserSlice.js"





const reducer = combineReducers({
    products: productsReducer,
    user: userReducer
})
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
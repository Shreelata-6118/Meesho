import { combineReducers } from "redux";
import currentProductReducer from "./currentProductReducer"
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"


const rootReducer=combineReducers({
    currentProduct:currentProductReducer,
    products: productReducer,
    cart: cartReducer,
   
})
export default rootReducer
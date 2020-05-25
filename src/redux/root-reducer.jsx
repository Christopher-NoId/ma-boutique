//fonction qui détermine les changements de state dans notre appli
//représente tous les state de notre appli

import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});

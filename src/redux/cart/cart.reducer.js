import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {

  hidden: true, //dropdown invisible à l'arrivée sur site
  cartItems: []//on veut ajouter des items dans cet array,
  //on doit donc créer de nouvelles actions et action.types pour 
  //que le reducer sache quel addItem action on fait.
};

const cartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}

export default cartReducer;
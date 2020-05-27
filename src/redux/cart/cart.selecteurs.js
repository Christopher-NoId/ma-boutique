import { createSelector } from 'reselect';

const selectCart = state => state.cart;
//on récupère tout le state et on en retourne un petite partie
// la partie cart

export const selectCartItems = createSelector(

  [selectCart],
  (cart) => cart.cartItems
  // cette fonction s'occupe de retourner la valeur qu'on veut de ce sélecteur
)

export const selectCartHidden = createSelector(

  [selectCart],
  cart => cart.hidden
)
export const selectCartItemsCount = createSelector(

  [selectCartItems],
  cartItems =>
    cartItems.reduce(

      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
)

export const selectCartTotal = createSelector(

  [selectCartItems],
  cartItems =>
    cartItems.reduce(

      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)
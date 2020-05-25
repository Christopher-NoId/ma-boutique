//ces fonctions vont simplement retourner des objets

import { UserActionTypes } from "./user.types";


export const setCurrentUser = user => ({
  //on utilise le même nom que dans le user-reducer que pour
  //notre créateur d'action
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

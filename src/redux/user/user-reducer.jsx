//fonction qui accède aux propriétés et obtient un state object
//qui représente le dernier state ou le state initial d'un objet
//et reçoit une action.
import { UserActionTypes } from "./user.types";
//constante sauvegardé dans user.types

const INITIAL_STATE = {
	//on indique à redux un state initial avant de lancer userReducer

	currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) =>
	//si state est undefined alors il s'initialise avec INITIAL_STATE
	{
		switch (action.type) {
			case UserActionTypes.SET_CURRENT_USER:
				return {
					...state,
					currentUser: action.payload
				};

			default:
				return state;
		}
	};

export default userReducer;

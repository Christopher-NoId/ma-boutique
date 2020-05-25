import { createStore, applyMiddleware } from 'redux';
//ajout de applyMiddleware au store pour que quand une action
//est réalisé, on peut attraper cette action et la montrer
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Setup du middleware
//Le middleware attendu par le store sera un array

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
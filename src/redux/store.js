import { createStore, applyMiddleware } from 'redux';
//ajout de applyMiddleware au store pour que quand une action
//est réalisé, on peut attraper cette action et la montrer
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Setup du middleware
//Le middleware attendu par le store sera un array

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
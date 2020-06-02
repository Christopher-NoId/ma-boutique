import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
//en passant store dans Provider on a accès à redux dans l'app

ReactDOM.render(

  <Provider store={store}>

    <BrowserRouter>

      <PersistGate persistor={persistor}>
        <App />

      </PersistGate>
    </BrowserRouter>,

  </Provider>,

  document.getElementById('root')
);

//Provider est un component qui est le parent de tous les élements de
//notre application, il donne accès à tous les éléments relatifs au store
//
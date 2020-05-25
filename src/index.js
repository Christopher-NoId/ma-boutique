import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './redux/store';
//en passant store dans Provider on a accès à redux dans l'app

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>,

  document.getElementById('root')
);

//Provider est un component qui est le parent de tous les élements de
//notre application, il donne accès à tous les éléments relatifs au store
//
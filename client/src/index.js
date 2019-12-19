import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
// Above is styling code

//redux is the memory/saving-state and react is the view, dom is document object model
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';  //to create state in a website
import {createStore, applyMiddleware} from 'redux';

import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {} , applyMiddleware(reduxThunk));

// FILE responsible for DATA

// This provider will allow for state(memory)
// To change and update throughout this program.
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);

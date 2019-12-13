import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';  //to create state in a website
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {} , applyMiddleware() );

// FILE responsible for DATA

// This provider will allow for state(memory)
// To change and update throughout this program.
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);

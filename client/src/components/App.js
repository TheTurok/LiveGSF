import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';  //navigation
// RESPONISIBLE for VIEWS

import Header from './Header';

const Landing = () => <h2> Lnading </h2>;

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact={true} path = "/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  ) ;
};

export default App;
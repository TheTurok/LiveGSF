import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';  //navigation
// RESPONISIBLE for VIEWS

const Landing = () => <h2> Lnading </h2>;

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Route path = "/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  ) ;
};

export default App;

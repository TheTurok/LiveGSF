import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';  //navigation
import {connect} from 'react-redux';
import * as actions from '../actions';

// RESPONISIBLE for VIEWS

import Header from './Header';

const Landing = () => <h2> Information Wafer Etc. </h2>;

class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
      <div className = "container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact={true} path = "/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);

import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';  //navigation
import {connect} from 'react-redux';
import * as actions from '../actions';

// RESPONISIBLE for VIEWS

import Header from './Header';
import Tracker from './tracker/Tracker';

//CurrentMeasurement Folder
import TrackerNew from './current_measurement/TrackerNew';
import CurrentMeasurement from './current_measurement/CurrentMeasurement';

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
            <Route exact={true} path = "/" component={CurrentMeasurement} />
            <Route exact={true} path = "/tracker" component={Tracker} />
            <Route exact={true} path = "/tracker/new" component={TrackerNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);

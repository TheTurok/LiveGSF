import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CurrentMeasurement extends Component{
  render(){
    return(
      <div >
        <h1> CurrentMeasurement </h1>
        <div>
          <Link to="/tracker/new" className="waves-effect waves-light btn"> New </Link>
        </div>
      </div>
    );
  }
};

export default CurrentMeasurement;

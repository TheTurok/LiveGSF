import React, {Component} from 'react';
import MeasurementStatus from './MeasurementStatus'

class CurrentMeasurement extends Component{
  render(){
    return(
      <div >
        <h1> Current Measurement </h1>
        <MeasurementStatus />
      </div>
    );
  }
};

export default CurrentMeasurement;

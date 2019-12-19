import React, {Component} from 'react';
import TrackerList from './TrackerList';

class Tracker extends Component{
  render(){
    return(
      <div >
        <h1> Tracker </h1>
        <TrackerList />
      </div>
    );
  }
};

export default Tracker;

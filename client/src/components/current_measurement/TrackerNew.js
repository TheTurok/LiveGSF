import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import TrackerForm from './TrackerForm';
import TrackerReview from './TrackerReview';

class TrackerNew extends Component{
  state = {showFormReview: false};

  renderContent(){
    if(this.state.showFormReview){
      return(
        <TrackerReview
          onCancel={() => this.setState({showFormReview: false})}
        />
      );
    }

    return (
      <TrackerForm
        onTrackerReview={() => this.setState({showFormReview: true})}
      />
    );
  }

  render(){
    return(
      <div >
        {this.renderContent()}
      </div>
    );
  }
};

export default reduxForm({
  form: 'trackerForm'
})(TrackerNew);

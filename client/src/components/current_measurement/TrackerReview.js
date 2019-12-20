import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {WAFERS, MODULES} from './formFields';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

class TrackerReview extends Component{
  renderTrayFields(){
      return _.map(WAFERS, (number) => {
        let w = 'wafer' + number;
        let q = 'quantity' + number;
        let b = 'bin' + number;

        return (
          <tr key={w}>
            <th>
              {this.props.formValues[w]}
            </th>
            <th>
              {this.props.formValues[b]}
            </th>
            <th>
              {this.props.formValues[q]}
            </th>
          </tr>
        );
      });
  }

  renderModules(){
    return _.map(MODULES, (mod) => {
      if(this.props.formValues[mod]){
        return(
          <div key={mod} style={{margin: '8px'}}> {mod} </div>
        );
      }
      return;
    });
  }

  render(){
    return(
      <div>
        <h3>Confirm Entries</h3>
        <div>
          <div>
            <label>Matrix</label>
            <div>{this.props.formValues.title}</div>
          </div>

          <div>
            <tr>
              <th>Wafer</th>
              <th>Bin</th>
              <th>Quantity</th>
            </tr>
            {this.renderTrayFields()}
          </div>

          <div className="eta">
            <label>ETA</label>
            <label> Hours </label>
            <div > {this.props.formValues.hours} </div>
            <label> Minutes </label>
            <div > {this.props.formValues.minutes} </div>
          </div>

          </div>
            <label> Modules </label>
            <div style={{display:'flex'}}> {this.renderModules()} </div>
          <div>

          </div>
            <label> Notes </label>
            <div > {this.props.formValues.notes} </div>
          <div>

        </div>
        <button
          className="yellow darken-3 btn-flat"
          onClick={this.props.onCancel} >
          Back
        </button>
        <button
          onClick={() => this.props.startMeasurement(this.props.formValues, this.props.history)}
          className="blue right white-text darken-3 btn-flat"
          >
          Start Measurement
        </button>
      </div>
    );
  };
}

function mapStateToProps(state){
  console.log(state.form.trackerForm.values);
  return{
    formValues: state.form.trackerForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(TrackerReview));

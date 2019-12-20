import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracker } from '../../actions';
import _ from 'lodash';
import {WAFERS} from '../current_measurement/formFields';
import { renderTrayFields } from '../current_measurement/CurrentMeasurement';

class TrackerList extends Component {
  componentDidMount() { //call action creator fetchTracker upon mount
    this.props.fetchTracker();
  }

  renderTrayFields(trays){
    if(trays) {
      return _.map(trays, ({wafer, quantity, bin}) => {
        if (wafer){
          return(
            <div style={{margin: '5px'}} key={wafer} className="wafer-information">
              <div className="white-text">{wafer}</div>
              <div className="white-text">{quantity}</div>
              <div className="white-text">{bin}</div>
            </div>
          );
        }
      });
    }
  }

  renderTrackerList() {
    if(this.props.history){
      return _.map(this.props.history, (aSingleTrack) => {
        return (
          <div className="card darken-1" key={aSingleTrack._id}>
            <div className="card-content">
              <span className="card-title">{aSingleTrack.title}</span>
              {this.renderTrayFields(aSingleTrack.trays)}
              <p>
                {aSingleTrack.notes}
              </p>
              <p>
                {aSingleTrack.link}
              </p>
              <p className="right">
                End Date: {new Date(aSingleTrack.end).toLocaleDateString()}
              </p>
              <p className="right">
                Start Date: {new Date(aSingleTrack.start).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return(
      <div>
        {this.renderTrackerList()}
      </div>
    )
  }
}

function mapStateToProps({ history }) {
  return { history }
}

export default connect(mapStateToProps, { fetchTracker })(TrackerList)

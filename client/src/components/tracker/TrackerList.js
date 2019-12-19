import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracker } from '../../actions';
import _ from 'lodash';

class TrackerList extends Component {
  componentDidMount() { //call action creator fetchTracker upon mount
    this.props.fetchTracker();
  }

  renderTrackerList() {
    if(this.props.history){
      return _.map(this.props.history, (aSingleTrack) => {
        return (
          <div className="card darken-1" key={aSingleTrack._id}>
            <div className="card-content">
              <span className="card-title">{aSingleTrack.title}</span>
              <p>
                {aSingleTrack.body}
              </p>
              <p className="right">
                Start Date: {new Date(aSingleTrack.start).toLocaleDateString()}
              </p>
              <p className="right">
                End Date: {new Date(aSingleTrack.end).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">

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

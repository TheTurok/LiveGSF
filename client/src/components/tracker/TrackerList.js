import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracker, saveLink } from '../../actions';
import _ from 'lodash';
import {WAFERS} from '../current_measurement/formFields';
import { renderTrayFields } from '../current_measurement/CurrentMeasurement';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

class TrackerList extends Component {
  componentDidMount() { //call action creator fetchTracker upon mount
    this.props.fetchTracker();
  }

  onChange(){
    this.props.onUserInput(
      this.refs.searchStringInput.value
    )
  }

  renderTrayFields(trays){
    if(trays) {
      return _.map(trays, ({wafer, quantity, bin}) => {
        if (wafer){
          return(
            <div style={{margin: '5px'}} key={wafer} className="wafer-information">
              <div >{wafer}</div>
              <div >{bin}</div>
              <div >{quantity}</div>
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
              <div style={{display: 'flex'}}>
                <p>
                  Start Date: {new Date(aSingleTrack.start).toLocaleDateString()}
                </p>
                <p style={{marginLeft: '20px'}}>
                  End Date: {new Date(aSingleTrack.end).toLocaleDateString()}
                </p>
              </div>
              <div style={{margin: '5px'}} className="wafer-information">
                <div>wafer</div>
                <div>bin</div>
                <div>quantity</div>
              </div>
              {this.renderTrayFields(aSingleTrack.trays)}

              <div className="card-stacked" >
                <div>
                  Notes
                </div>
                <div>
                  {aSingleTrack.notes}
                </div>

                <div>
                    <p >
                      Link: {aSingleTrack.link}
                    </p>
                    <Link to={{pathname:'/tracker/edit', state: {trackid:aSingleTrack._id, link:aSingleTrack.link} }}>
                    <button className="blue white-text darken-3 btn-flat">
                      Edit
                    </button>
                    </Link>
                  <button className="red right white-text darken-3 btn-flat">
                    Delete
                  </button>
                  <button className="green white-text darken-3 btn-flat">
                    Copy
                  </button>
                </div>
              </div>

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

export default connect(mapStateToProps, { fetchTracker, saveLink })(TrackerList)

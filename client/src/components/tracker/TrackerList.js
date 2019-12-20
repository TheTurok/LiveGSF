import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracker, saveLink } from '../../actions';
import _ from 'lodash';
import {WAFERS} from '../current_measurement/formFields';
import { renderTrayFields } from '../current_measurement/CurrentMeasurement';
import {reduxForm, Field} from 'redux-form';

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
              <div >{quantity}</div>
              <div >{bin}</div>
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

              <div class="card-stacked" >
                <div>
                  Notes
                </div>
                <div>
                  {aSingleTrack.notes}
                </div>

                <div>
                    <p onchange={this.onChange}>
                      Link:<input id={aSingleTrack._id} type="text" name="linked" value={aSingleTrack.link} />
                    </p>
                    <button
                      type="submit"
                      onClick={() => this.props.saveLink({_id: aSingleTrack._id}, {link: document.getElementById(aSingleTrack._id).value}, this.props.history)}
                      className="blue white-text darken-3 btn-flat">
                      Save
                    </button>
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

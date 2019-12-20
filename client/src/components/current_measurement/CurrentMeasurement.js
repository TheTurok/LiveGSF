import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';
import {WAFERS} from './formFields';
import moment from 'moment';
import'moment-countdown';
import Countdown from 'react-countdown-now';

class CurrentMeasurement extends Component{
  renderTrayFields(){
    return _.map(this.props.track.trays, ({wafer, quantity, bin}) => {
      if (wafer){
        return(
          <div style={{margin: '5px'}} key={wafer} className="wafer-information">
            <div className="white-text">{wafer}</div>
            <div className="white-text">{bin}</div>
            <div className="white-text">{quantity}</div>
          </div>
        );
      }
    });
  }

  renderContent(){
    switch(this.props.track){
      case null:
        return;
      case false:
        return <div> Unable to Retrive Data </div>;
      default:
        return(
          <div>
            <div className="row">
              <div className="card grey">
                <div className="card-content white-text">
                  <span className="card-title"> {this.props.track.title}</span>
                  <div style={{display: 'flex'}}>
                    <p style={{ margin:'5px'}}>
                      Start: {moment(this.props.track.start).format('D-MMM-YY')}
                    </p>
                    <p className="pull-right" style={{margin:'5px'}}>
                      End: {this.props.track.end? moment(this.props.track.end).format('D-MMM-YY') : <span style={{marginLeft:'5px'}}> OnGoing</span> }
                    </p>
                  </div>
                  <div>
                    <p style={{ margin:'5px'}}>ETA: {moment(this.props.track.end).format('D-MMM-YY / h:mm a')}</p>
                    <p style={{ display: 'flex'}}>
                      <div style={{ margin:'5px' }}>
                        Timer:
                      </div>
                      <div style={{ margin:'5px'}}>
                        <Countdown  date={this.props.track.eta} />
                      </div>
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{margin: '5px'}} className="wafer-information">
                    <div className="white-text">wafer</div>
                    <div className="white-text">bin</div>
                    <div className="white-text">quantity</div>
                  </div>
                  {this.renderTrayFields()}
                </div>
                <div className="notes">
                  <h6 className="white-text" style={{margin:'10px'}}>Notes</h6>
                  { this.props.track.notes}
                </div>
                <div className="card-action">
                <button
                  onClick={() => this.props.deleteMeasurement({_id: this.props.track._id}, this.props.history)}
                  className="red white-text darken-3 btn-flat"
                  >
                  Delete
                </button>
                  <button
                    onClick={() => this.props.completeMeasurement({_id: this.props.track._id}, this.props.history)}
                    className="blue right white-text darken-3 btn-flat"
                    >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  render(){
    return(
      <div >
        <h3> CurrentMeasurement </h3>
        <div>
          {this.renderContent()}
          <Link to="/tracker/new" className="waves-effect waves-light btn"> New </Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ track }) {
  return { track };
}

export default connect(mapStateToProps, actions)(CurrentMeasurement);

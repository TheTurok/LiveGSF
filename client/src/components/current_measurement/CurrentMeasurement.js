import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';
import {WAFERS} from './formFields';

class CurrentMeasurement extends Component{
  renderTrayFields(){
    return _.map(this.props.track.trays, ({wafer, quantity, bin}) => {
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
                  <p style={{display:'flex', margin:'5px'}}>Start: {new Date(this.props.track.start).toLocaleDateString()}</p>
                  <p style={{display:'flex', margin:'5px'}}>End: {this.props.track.end? new Date(this.props.track.end).toLocaleDateString() : <p style={{marginLeft:'5px'}}> OnGoing</p> }</p>
                </div>
                <div>
                  {this.renderTrayFields()}
                </div>
                <div>
                  <h6 className="white-text" style={{margin:'10px'}}>Notes</h6>
                  { this.props.track.notes}
                </div>
                <div className="card-action">
                  <a href="#">Edit</a>
                  <a href="#">Delete</a>
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
          <a href="/" style={{margin: '5px'}} className="waves-effect waves-light btn"> Complete </a>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ track }) {
  console.log(track);
  return { track };
}

export default connect(mapStateToProps, actions)(CurrentMeasurement);

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class CurrentMeasurement extends Component{
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
              <div className="card grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title"> {this.props.track.title}</span>
                  <p> {this.props.track.start }</p>
                  <p> {this.props.track.end }</p>
                </div>
                <div>
                  {this.props.track.wafer1 ? <h6>Wafer</h6> : <div></div> }
                </div>
                <div className="card-action">
                  <a href="#">Edit</a>
                  <a href="#">Delete</a>
                  <a href="#">Complete</a>
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
  return { track };
}

export default connect(mapStateToProps, actions)(CurrentMeasurement);

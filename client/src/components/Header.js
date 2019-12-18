import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  renderContent() {
      switch(this.props.auth) {
        case null:
          return;
        case false:
          return (
            <a href="/auth/google"> Google Login </a>
          );
        default:
          return(
            <a href="api/logout"> Logout </a>
          );
      }
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper yellow accent-4" >
          <Link to="/" style={{color:'purple', fontWeight: 'bold', margin:'10px', fontSize: '22px'}}> Golden Sunflower </Link>
          <ul className="right">
            <li>
              <Link to="/tracker"> Tracker </Link>
            </li>
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }; //return an object that would be passed to header as props
} //props are things you pass into a component

export default connect(mapStateToProps) (Header); //connecting Header to state

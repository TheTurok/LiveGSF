import React, {Component} from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class EditLink extends Component{
  constructor(props) {
    super(props);
    let {trackid, link} = this.props.location.state

    this.state = {
      trackid: trackid,
      link: link
    };
  }

  handleInputChange(e) {
    this.setState({
        link: e.target.value
    });
  }

  render(){
    return(
      <div >
        <h1> Edit Link</h1>
        <input type="text" onChange={(e) => this.handleInputChange(e)} value={this.state.link}/>
        <button
          type="submit"
          onClick={() => this.props.saveLink(this.state.trackid, this.state.link, this.props.history)}
          className="blue white-text darken-3 btn-flat">
          Save
        </button>
      </div>
    );
  }
};

export default connect(null, actions)(EditLink);

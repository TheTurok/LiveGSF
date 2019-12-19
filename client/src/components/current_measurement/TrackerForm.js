import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import TrackerField from './TrackerField';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {WAFERS, MODULES} from './formFields';

class TrackerForm extends Component{
  renderTrayFields(){
    return _.map(WAFERS, (number) => {
      return (
        <div key={`wafer${number}`} className="wafer-information">
          <Field component={TrackerField} type="text" name={`wafer${number}`} label={`wafer${number}`} theClass="wafer" />
          <Field component={TrackerField} type="text" name={`bin${number}`} label={`bin${number}`} theClass="bin" />
          <Field component={TrackerField} type="text" name={`quantity${number}`} label={`quantity${number}`} theClass="quantity" />
        </div>
      );
    });
  }

  renderModules(){
    return _.map(MODULES, (mod) => {
      return(
        <div key={mod} style={{display: 'flex'}} >
          <label htmlFor={mod}>{mod}</label>
          <div>
            <Field
              id={mod}
              name={mod}
              component="input"
              type="checkbox"
            />
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div >
        <h3> Measurement Information </h3>
        <form action="#" onSubmit={this.props.handleSubmit(this.props.onTrackerReview)}>
          <Field
            label="Matrix"
            type="text"
            name="title"
            component={TrackerField}
            />

          {this.renderTrayFields()}

          <div id="modules"> {this.renderModules()} </div>

          <div>
            <label>Notes</label>
            <div>
              <Field name="notes" component="textarea" />
            </div>
          </div>

          <Link to="/" className="red btn-flat left white-text"> Cancel </Link>
          <button className="teal btn-flat right white-text"> Review </button>
        </form>
      </div>
    );
  }
};

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "You must provide a title!";
  }

  _.each(WAFERS, (wafer) =>{
    let w = 'wafer'+ wafer;
    if(values[w] && isNaN(values[w])){
      errors[w] = "wafer must be a number";
    }

    let q = 'quantity'+ wafer;
    if(values[q] && isNaN(values[q])){
      errors[q] = "quantity must be a number";
    }

    let b = 'bin'+ wafer;
    if(values[b] && values[b].length !== 2){
      errors[b] = "bin can only be two characters";
    }

  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'trackerForm',
  destroyOnUnmount: false,
  initialValues: {
    dvh: true,
    stofmr: true,
    hf: true,
    fmr: true
  }
})(TrackerForm);

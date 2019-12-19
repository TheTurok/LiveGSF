import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import authReducer from './authReducer';
import trackReducer from './trackReducer';


export default combineReducers({
  auth: authReducer,
  track: trackReducer,
  form: reduxForm
});

import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import authReducer from './authReducer';
import trackReducer from './trackReducer';
import historyReducer from './historyReducer';


export default combineReducers({
  auth: authReducer,
  track: trackReducer,
  history: historyReducer,
  form: reduxForm
});

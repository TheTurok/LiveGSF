import {combineReducers} from 'redux';
import authReducer from './authReducer';
import trackReducer from './trackReducer';

export default combineReducers({
  auth: authReducer,
  track: trackReducer
});

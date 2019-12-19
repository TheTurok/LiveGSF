import {FETCH_TRACKER, COMPLETE_MEASUREMENT} from '../actions/types';

export default function(state = null, action ) {
  switch(action.type){
    case FETCH_TRACKER || COMPLETE_MEASUREMENT:
      return action.payload || false;
    default:
      return state;
  }
}

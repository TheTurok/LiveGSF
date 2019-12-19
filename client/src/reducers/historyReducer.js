import {FETCH_TRACKER_HISTORY} from '../actions/types';

export default function(state = null, action ) {
  switch(action.type){
    case FETCH_TRACKER_HISTORY:
      return action.payload || false;
    default:
      return state;
  }
}

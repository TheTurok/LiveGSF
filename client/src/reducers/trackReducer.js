import {FETCH_TRACKER} from '../actions/types';

export default function(state = null, action ) {
  switch(action.type){
    case FETCH_TRACKER:
      return action.payload || false;
    default:
      return state;
  }
}

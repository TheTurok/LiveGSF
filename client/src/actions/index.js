import axios from 'axios';
import {
  FETCH_USER,
  FETCH_TRACKER,
  FETCH_TRACKER_HISTORY,
  START_MEASUREMENT,
  COMPLETE_MEASUREMENT} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload:res.data});
};

export const fetchTracker = () => async dispatch => {
  const res = await axios.get('/api/tracker');
  dispatch({type: FETCH_TRACKER_HISTORY, payload:res.data});
}

export const fetchCurrentMeasurement = () => async dispatch => {
  const res = await axios.get('/api/tracker/current');
  dispatch({type: FETCH_TRACKER, payload:res.data});
}

export const startMeasurement = (values, history) => async dispatch => {
  const res = await axios.post('/api/tracker', values);
  history.push('/');
  dispatch({type: START_MEASUREMENT, payload: res})
}

export const completeMeasurement = (id, history) => async dispatch => {
  const res = await axios.put('./api/tracker/complete', id);
  dispatch({type: COMPLETE_MEASUREMENT, payload: res});
  history.push('/');
}

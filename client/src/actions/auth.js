import axios from 'axios';
import * as authActionTypes from 'actionTypes/auth';
import config from 'config';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${config.dev.server.url}/signup`, formProps);

    dispatch({
      type: authActionTypes.AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem('token', response.data.token);

    callback();
  } catch(err) {
    dispatch({
      type: authActionTypes.AUTH_ERROR,
      payload: 'Email is in use'
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${config.dev.server.url}/signin`, formProps);

    dispatch({
      type: authActionTypes.AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem('token', response.data.token);

    callback();
  } catch(err) {
    dispatch({
      type: authActionTypes.AUTH_ERROR,
      payload: 'Invalid login credentials'
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: authActionTypes.AUTH_USER,
    payload: ''
  }
};
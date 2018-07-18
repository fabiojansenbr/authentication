import * as authActionTypes from 'actionTypes/auth';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authActionTypes.AUTH_USER:
      return {
        ...state,
        authenticated: action.payload
      };
    case authActionTypes.AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const receiveLoginErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveLoginErrors(errors.responseJSON))))
);

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveLoginErrors(errors.responseJSON))))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(user => (dispatch(logoutUser(user))), errors => (dispatch(receiveLoginErrors(errors.responseJSON))))
);
import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const CLEAR_LOGIN_ERRORS = "CLEAR_LOGIN_ERRORS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const receiveLoginErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});

export const clearLoginErrors = () => ({
  type: CLEAR_LOGIN_ERRORS
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

export const fetchUsers = () => dispatch => (
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(users => dispatch(receiveUsers(users)))
);
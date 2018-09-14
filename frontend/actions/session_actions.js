import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOG_OUT_CURRENT_USER = 'LOG_OUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_NO_ERRORS = 'RECEIVE_NO_ERRORS';


function receiveCurrentUser(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
}

function logoutCurrentUser() {
  return {
    type: LOG_OUT_CURRENT_USER
  };
}

function receiveErrors(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
}

export const receiveNoErrors = () => {
  return {
    type: RECEIVE_NO_ERRORS,
  };
};


export const login = user => {
  return dispatch => {
    return SessionApiUtil.login(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

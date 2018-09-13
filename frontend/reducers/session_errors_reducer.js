import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_NO_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: {
      return action.errors;
    }
    case RECEIVE_CURRENT_USER: {
      const errors = [];
      return errors;
    }
    case RECEIVE_NO_ERRORS: {
      const errors = [];
      return errors;
    }

    default:
      return state;
  }
};

export default sessionErrorsReducer;

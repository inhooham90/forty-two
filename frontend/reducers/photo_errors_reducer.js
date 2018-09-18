import { RECEIVE_UPLOAD_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_NO_ERRORS } from '../actions/photo_actions';

const photoErrorsReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_UPLOAD_ERRORS: {
      return action.errors;
    }
    case RECEIVE_NO_ERRORS: {
      const errors = [];
      return errors;
    }

    default:
      return state;
  }
};

export default photoErrorsReducer;

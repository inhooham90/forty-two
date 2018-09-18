import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import { merge } from 'lodash';

export default function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = Object.assign({}, state);
      return merge({}, newState, { [action.user.id]: action.user });
    }
    case RECEIVE_ALL_PHOTOS: {
      return merge({}, action.users);
    }
    default: {
      return state;
    }
  }
}

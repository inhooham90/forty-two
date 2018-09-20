import { RECEIVE_USER } from '../actions/user_actions';

export default function photoShowReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user.id;
    default:
      return state;
  }
}

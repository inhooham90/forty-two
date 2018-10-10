import { OPEN_MODAL_SHOW } from '../actions/modal_actions';

export default function photoShowReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL_SHOW:
      return action.photoId;
    default:
      return state;
  }
}

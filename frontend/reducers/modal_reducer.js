import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_SHOW, OPEN_MODAL_PROFILE } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case OPEN_MODAL_SHOW:
      return action.modal;
    case OPEN_MODAL_PROFILE:
      return action.modal
    default:
      return state;
  }
}

// export const OPEN_MODAL_SHOW = 'OPEN_MODAL_SHOW';
// export const open_modal_show = photoId => {
//   type: OPEN_MODAL_SHOW,
//   modal: 'photo',
//   photoId
// }

import { OPEN_MODAL_SHOW } from '../actions/modal_actions';

export default function photoShowReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL_SHOW:
      return action.photo;
    default:
      return null;
  }
}

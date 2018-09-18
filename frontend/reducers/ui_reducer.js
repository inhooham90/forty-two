import { combineReducers } from 'redux';

import modal from './modal_reducer';
import photoShow from './photo_show_reducer';
// import profile from './user_reducer';

export default combineReducers({
  modal,
  photoShow,
  // profile
});

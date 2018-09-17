import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import photoErrorsReducer from './photo_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  upload: photoErrorsReducer
});

export default errorsReducer;

import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';
import commentsReducer from './comments_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: PhotosReducer,
  comments: commentsReducer,
});

export default entitiesReducer;

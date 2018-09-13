import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: PhotosReducer
});

export default entitiesReducer;

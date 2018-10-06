import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  LIKE_PHOTO,
  UNLIKE_PHOTO,
} from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, oldState, {[action.photo.id]: action.photo});
    case REMOVE_PHOTO:
      let newState = merge({}, oldState);
      delete newState[action.photoId];
      return newState;
    case RECEIVE_USER:
      return merge({}, action.photos);
    case LIKE_PHOTO:{
      const photoId = action.like.photo_id;
      const updatedPhoto = merge({}, oldState[photoId])
      updatedPhoto.likers.push(action.like.liker_id)

      return merge({}, oldState, { [photoId]: updatedPhoto });
    }

    case UNLIKE_PHOTO:{
      const newState = merge({}, oldState);
      const photoId = action.like.photo_id;
      delete newState[photoId];
      const updatedPhoto = merge({}, oldState[photoId]);
      let index = updatedPhoto.likers.indexOf(action.like.liker_id)
      if (index > -1) {
       updatedPhoto.likers.splice(index, 1)
      }
      return merge({}, newState, { [photoId]: updatedPhoto });
    }
    default:
      return oldState;
  }
};

export default PhotosReducer;

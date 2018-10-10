import { COMMENT_PHOTO, UNCOMMENT_PHOTO, RECEIVE_ALL_COMMENTS } from '../actions/photo_actions';
import { merge } from 'lodash';

export default function(state={}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:{
      return merge({}, state, action.comments)
    }
    case COMMENT_PHOTO:{
      return merge({}, state, { [action.comment.id]: action.comment });
    }
    case UNCOMMENT_PHOTO:{
      const newState = merge({}, state);
      const commentId = action.comment.id;
      delete newState[commentId];
      const updatedPhoto = merge({}, state[commentId]);
      return merge({}, newState);
    }
    default:
      return state;

  }
}

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import {
  RECEIVE_USER,
  FOLLOW_USER,
  UNFOLLOW_USER
 } from '../actions/user_actions';
import { merge } from 'lodash';

export default function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = Object.assign({}, state);
      return merge({}, newState, { [action.user.id]: action.user });
    }
    case RECEIVE_ALL_PHOTOS: {
      return merge({}, action.users);
    }
    case RECEIVE_USER:
      const newState = Object.assign({}, state);
      return merge({}, newState, { [action.user.id]: action.user });

    case FOLLOW_USER:{
      const userId = action.follow.followee_id;
      const updatedUser = merge({}, state[userId])
      updatedUser.followers.push(action.follow.follower_id)
      return merge({}, state, { [userId]: updatedUser });
    }

    case UNFOLLOW_USER:{
      const newState = merge({}, state);
      const userId = action.follow.followee_id;
      delete newState[userId];
      const updatedUser = merge({}, state[userId]);
      let index = updatedUser.followers.indexOf(action.follow.follower_id)
      if (index > -1) {
       updatedUser.followers.splice(index, 1)
      }

      return merge({}, newState, { [userId]: updatedUser });
    }

    default: {
      return state;
    }
  }
}

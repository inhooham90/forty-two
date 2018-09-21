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
      // const updatedFollow = merge({},
      //   state[userId].followers,
      //   { [action.follow.id]: action.follow }
      // );
      // const updatedUser = merge({},
      //   state[Object.keys(state)[0]],
      //   { followee: state[Object.keys(state)[0]].followers }
      // );
      return merge({}, state, { [userId]: updatedUser });
    }

    case UNFOLLOW_USER:{
      // const updatedFollow = merge({}, state[userId].followers);
      // delete updatedFollow[action.follow.id];
      const userId = action.follow.followee_id;
      const updatedUser = merge({}, state[userId]);
      let index = updatedUser.followers.indexOf(action.follower_id)
      updatedUser.followers.slice(index, 1)
      // let index = array.indexOf(userId);
      // if (index > -1) {
      //   array.splice(index, 1);
      // }
      return merge({}, state, { [userId]: updatedUser });
    }
    default: {
      return state;
    }
  }
}

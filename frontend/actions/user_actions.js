import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = id => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then(user => {
      return dispatch(receiveUser(user));
    });
  };
};



export const receiveUser = payload => ({
  type: RECEIVE_USER,
  user: payload.user,
  photos: payload.photos
});

export const receiveFollow = followInfo => ({
  type: RECEIVE_FOLLOW,
  followInfo
});

export const receiveUnfollow = followInfo => ({
  type: RECEIVE_UNFOLLOW,
  followInfo
});

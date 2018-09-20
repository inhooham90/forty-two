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

export const followUser = user => dispatch => (
  UserApiUtil
    .followUser(user)
    .then(payload => dispatch(receiveFollow(payload)))
);

export const unfollowUser = user => dispatch => (
  UserApiUtil
    .unfollowUser(user)
    .then(payload => dispatch(receiveUnfollow(payload)))
);

// export const receiveFollowers =

export const updateUser = user => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(payload => {
      return dispatch(receiveUser(payload));
    });
  };
};

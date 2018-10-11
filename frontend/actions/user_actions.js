import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const RECEIVE_PROFILE_PICTURE = 'RECEIVE_PROFILE_PICTURE';

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

export const followUser = user => {
return dispatch => (
  UserApiUtil.followUser(user).then(payload =>
    dispatch(receiveFollowUser(payload)))
)};

const receiveFollowUser = follow => {
    return {
    type: FOLLOW_USER,
    follow
  };
};

export const unfollowUser = id => dispatch => (
  UserApiUtil.unfollowUser(id).then(data =>
    dispatch(ReceiveUnfollowUser(data)))
);

const ReceiveUnfollowUser = follow => {
  return {
    type: UNFOLLOW_USER,
    follow
  };
};

export const createProfilePic = photo => {
  return dispatch => {
    return UserApiUtil.createProfilePic(photo).then(data => {
      return dispatch(receiveProfilePic(data));
    });
  };
};

const receiveProfilePic = photo => {
  return {
    type: RECEIVE_PROFILE_PICTURE,
    photo
  };
};

export const updateProfilePic = photo => dispatch => (
  UserApiUtil.updateProfilePic(photo).then(data =>
    dispatch(receiveProfilePic(data)))
);

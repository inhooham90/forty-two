import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

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
  }
};

export const unfollowUser = id => dispatch => (
  UserApiUtil.unfollowUser(id).then(data =>
    dispatch(ReceiveUnfollowUser(data)))
);

const ReceiveUnfollowUser = follow => {
  return {
    type: UNFOLLOW_USER,
    follow
}
};

// export const updateUser = user => {
//   return dispatch => {
//     return UserApiUtil.updateUser(user).then(payload => {
//       return dispatch(receiveUser(payload));
//     });
//   };
// };

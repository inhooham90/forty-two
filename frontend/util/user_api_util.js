export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
}

export const deleteFollow = followId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${followId}`
  });
};

export const followUser = (currentUserId, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${currentUserId}/follows`,
  })
);

export const unfollowUser = (currentUserId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${currentUserId}/follows/${id}`
  })
);
//
// export const fetchUserFollowers = user => (
//   $.ajax({
//     method: 'GET',
//     url: `api/users/${user.id}/followers`,
//   })
// );
//
// export const fetchUserFollowing = user => (
//   $.ajax({
//     method: 'GET',
//     url: `api/users/${user.id}/following`,
//   })
// );

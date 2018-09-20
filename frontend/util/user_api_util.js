export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
}

export const updateUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  });
};

export const deleteFollow = followId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${followId}`
  });
};

export const followUser = userToFollow => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userToFollow.id}/follow`,
  })
);

export const unfollowUser = userToUnfollow => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userToUnfollow.id}/unfollow`
  })
);

export const fetchUserFollowers = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/followers`,
  })
);

export const fetchUserFollowing = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/following`,
  })
);

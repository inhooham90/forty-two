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

export const followUser = id => {
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: { follow: { followee_id: id } }
  });
};

export const unfollowUser = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`,
  });
};

export const createProfilePic = photo => {
debugger
  return $.ajax({
    method: "POST",
    url: `api/users/${photo.user_id}/profile_pictures`,
    data: {photo}
  });
};

export const updateProfilePic = photo => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${photo.user_id}/profile_pictures/${photo.id}`,
    data: {photo}
  })
}

export const createCoverPic = photo => {
  return $.ajax({
    method: "POST",
    url: `api/users/${photo.user_id}/cover_pictures`,
    data: {photo}
  })
}
export const updateCoverPic = photo => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${photo.user_id}/cover_pictures/${photo.id}`,
    data: {photo}
  })
}

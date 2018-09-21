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

export const unfollowUser = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`,
  });
};

export const deleteFollow = followId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${followId}`
  });
};

export const createFollow = photo => {
  return $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: {photo}
  });
};

export const fetchPhoto = id => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const fetchPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/photos'
  });
};

export const deletePhoto = photoId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${photoId}`
  });
};

export const createPhoto = photo => {
  return $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: {photo}
  });
};

export const updatePhoto = photo => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: {photo}
  });
};

export const likePhoto = id => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like: { photo_id: id } }
  });
};

export const unlikePhoto = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${id}`,
  });
};

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `api/photos/${comment.photo_id}/comments`,
    data: {comment}
  });
};

export const deleteComment = comment => {
  return $.ajax({
    method: "DELETE",
    url: `/api/photos/${comment.photo_id}/comments/${comment.id}`,
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${comment.photo_id}/comments/${comment.id}`,
    data: {comment}
  });
};

export const fetchComments = photoId => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/comments`,
  })
}

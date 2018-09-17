export const fetchPhoto = id => {
  return $.ajax({
    method: 'GET',
    url: `api/photo/${id}`,
    data: {user}
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

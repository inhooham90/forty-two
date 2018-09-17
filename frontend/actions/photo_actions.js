import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_NO_ERRORS = 'RECEIVE_NO_ERRORS';

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)))
);


export const createPhoto = photo => {
  return dispatch => {
    return PhotoApiUtil.createPhoto(photo).then(photo => {
      return dispatch(receivePhoto(photo));
    }, errors => {
      return dispatch(receiveErrors(errors));
    });
  };
};


export const updatePhoto = photo => {
  return dispatch => {
    return PhotoApiUtil.updatePhoto(photo).then(photo => {
      return dispatch(receivePhoto(photo));
    }, errors => {
      return dispatch(receiveErrors(errors));
    });
  };
};

export const deletePhoto = photoId => {
  return dispatch => {
    return PhotoApiUtil.deletePhoto(photoId).then(photo => {
      return dispatch(removePhoto(photoId));
    });
  };
};

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const receiveNoErrors = () => {
  return {
    type: RECEIVE_NO_ERRORS,
  };
};

function receiveErrors(errors) {
  return {
    type: RECEIVE_UPLOAD_ERRORS,
    errors
  };
}

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_SHOW = 'OPEN_MODAL_SHOW';
export const OPEN_MODAL_PROFILE = 'OPEN_MODAL_PROFILE';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openModalShow = photoId => {
  return {
    type: OPEN_MODAL_SHOW,
    modal: 'photo',
    photoId
  }
}

export const openModalProfile = userId => {
  return {
    type: OPEN_MODAL_PROFILE,
    modal: 'profile',
    userId
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

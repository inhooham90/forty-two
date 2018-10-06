import React from 'react';
import { connect } from 'react-redux';
import {
  updatePhoto,
  fetchPhoto,
  receiveNoErrors,
  deletePhoto,
  likePhoto,
  unlikePhoto,
} from '../../actions/photo_actions';
import PhotoShow from './photo_show';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.upload,
    photo: state.entities.photos[state.ui.photoShow],
    artist: state.entities.users[state.entities.photos[state.ui.photoShow].artist_id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    clearErrors: () => dispatch(receiveNoErrors()),
    closeModal: () => dispatch(closeModal()),
    action: state => dispatch(updatePhoto(state)),
    deletePhoto: photo => dispatch(deletePhoto(photo)),
    likePhoto: id => dispatch(likePhoto(id)),
    unlikePhoto: id => dispatch(unlikePhoto(id))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);

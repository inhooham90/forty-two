import React from 'react';
import { connect } from 'react-redux';
import {createPhoto, receiveNoErrors } from '../../actions/photo_actions';
import ProfileUpdateForm from './profile_update_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  debugger
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.upload,
    photos: Object.values(state.entities.photos),
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: photo => dispatch(createPhoto(photo)),
    clearErrors: () => dispatch(receiveNoErrors()),
    closeModal: () => dispatch(closeModal())
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdateForm);

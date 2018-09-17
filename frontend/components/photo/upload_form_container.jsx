import React from 'react';
import { connect } from 'react-redux';
import {createPhoto, receiveNoErrors } from '../../actions/photo_actions';
import PhotoForm from './_photo_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors,
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: photo => dispatch(createPhoto(photo)),
    clearErrors: () => dispatch(receiveNoErrors()),
    closeModal: () => dispatch(closeModal())
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);

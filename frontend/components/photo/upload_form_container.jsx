import React from 'react';
import { connect } from 'react-redux';
import {createPhoto, receiveNoErrors } from '../../actions/photo_actions';
import PhotoForm from './_photo_form';


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
    receiveNoErrors: () => dispatch(createPhoto(photo))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);

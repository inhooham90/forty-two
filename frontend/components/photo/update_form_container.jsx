import React from 'react';
import { connect } from 'react-redux';
import {updatePhoto, receiveNoErrors } from '../../actions/photo_actions';


const mapStateToProps = state => {
  photos: state,
  errors: state.errors.session.responseJSON,
  currentUser: state.session.currentUser,
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: photo => {dispatch(updatePhoto(photo)),
    clearErrors: () => dispatch(receiveNoErrors())
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Photo);

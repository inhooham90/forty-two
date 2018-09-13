import React from 'react';
import { connect } from 'react-redux';
import {createPhoto, receiveNoErrors } from '../../actions/photo_actions';


const mapStateToProps = state => {
  photos: state
  errors: state.errors.session.responseJSON
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBleat: photo => {
      dispatch(createPhoto(photo)),
      clearErrors: () => dispatch(receiveNoErrors())
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Photo);

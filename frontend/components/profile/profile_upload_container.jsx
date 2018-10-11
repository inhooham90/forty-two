import React from 'react';
import { connect } from 'react-redux';
import { createProfilePic } from '../../actions/user_actions';
import PictureForm from './_picture_form';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    type: "profile"
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    action: photo => dispatch(createProfilePic(photo)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureForm);

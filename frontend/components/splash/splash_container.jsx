import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => {
  // const currentUser = state.entities.users[state.session.currentUserId];
// debugger
  return {
    currentUser:state.entities.users[state.session.currentUserId],
    photos: state.entities.photos
   };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchPhotos: () => dispatch(fetchPhotos()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Splash);

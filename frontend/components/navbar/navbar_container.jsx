import React from 'react';
import { connect } from 'react-redux';
import Navbar from './greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.currentUserId];

  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

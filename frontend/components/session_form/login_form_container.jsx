import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './login_form';
import { login, receiveNoErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveNoErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

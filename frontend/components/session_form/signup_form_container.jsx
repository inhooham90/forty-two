import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, receiveNoErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveNoErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

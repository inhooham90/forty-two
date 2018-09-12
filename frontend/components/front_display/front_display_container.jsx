import React from 'react';
import { connect } from 'react-redux';
import FrontDisplay from './front_display';


const mapStateToProps = state => {
  photos: state
};

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// })


export default connect()(FrontDisplay);

import React from 'react';
import { connect } from 'react-redux';
import {
  createComment,
  deleteComment,
  updateComment
} from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';
import Comments from './comments.jsx';

const mapStateToProps = state => {
  const comments = Object.values(state.entities.comments).filter( comment => {
    return comment.photo_id === state.ui.photoShow;
  });
  return {
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    photo: state.entities.photos[state.ui.photoShow],
    comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteComment: comment => dispatch(deleteComment(comment)),
    createComment: state => dispatch(createComment(state)),
    closeModal: () => dispatch(closeModal()),
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(Comments);

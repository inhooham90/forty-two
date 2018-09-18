import { connect } from 'react-redux';
import Profile from './profile';
import {
  receiveErrors,
  receiveNoErrors,
  deletePhoto
} from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { openModal, openModalShow } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors,
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  openModalShow: photoId => dispatch(openModalShow(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

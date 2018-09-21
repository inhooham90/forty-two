import { connect } from 'react-redux';
import Profile from './profile';
import {
  receiveErrors,
  receiveNoErrors,
  deletePhoto
} from '../../actions/photo_actions';
import { fetchUser, followUser, unfollowUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import {
  openModal,
  openModalShow,
  openModalProfile
} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id)),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  openModalShow: photoId => dispatch(openModalShow(photoId)),
  openModalProfile: userId => dispatch(openModalProfile(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

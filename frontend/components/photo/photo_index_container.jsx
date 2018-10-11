import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import {
  fetchPhoto,
  fetchPhotos,
  receiveErrors,
  receiveNoErrors,
} from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal, openModalShow } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  let currentUserFollowees = Object.values(state.entities.users[state.session.currentUserId].followees);
  const photos = Object.values(state.entities.photos).filter(photo => currentUserFollowees.includes(photo.artist_id));
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors,
    photos,
    users: state.entities.users,
    user: state.entities.users[state.session.currentUserId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  openModalShow: photo => dispatch(openModalShow(photo)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);

import { connect } from 'react-redux';
import Discover from './discover';
import {
  fetchPhoto,
  fetchPhotos,
  receiveErrors,
  receiveNoErrors,
} from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';
import { openModal, openModalShow } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors,
    photos: Object.values(state.entities.photos),
    users: state.entities.users,
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

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

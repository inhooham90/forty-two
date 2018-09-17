import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import {
  fetchPhoto,
  fetchPhotos,
  receiveErrors,
  receiveNoErrors,
  deletePhoto
} from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  logout: () => dispatch(logout()),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);

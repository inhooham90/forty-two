import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import {
  fetchPhoto,
  fetchPhotoss,
  receiveErrors,
  receiveNoErrors
} from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  fetchPhotos: () => dispatch(fetcPhotos()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);

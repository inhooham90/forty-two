import { connect } from 'react-redux';
import About from './about';
// import {} from '../../actions/photo_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

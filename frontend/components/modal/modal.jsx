import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PhotoUploadContainer from '../photo/upload_form_container';
import PhotoShowContainer from '../photo/photo_show_container';
// import ProfileUpdateContainer from '../profile/profile_update_container';

function Modal({ modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'upload':
      component = <PhotoUploadContainer />;
      break;
    case 'photo':
      component = <PhotoShowContainer />;
      break;

    // case 'profile':
    //   component = <ProfileUpdateContainer />;
    //   break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

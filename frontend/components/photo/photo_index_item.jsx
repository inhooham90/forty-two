import React from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let deleteButton = (this.props.currentUserId===this.props.photo.artist_id) ?
    (
      <button onClick={() => this.props.deletePhoto(this.props.photo.id)}>Delete</button>
    ) : (
      ''
    )
    return(

      <li className='index-items' onClick={() => this.props.openModalShow(this.props.photo.id)}>
        <ul className='index-item-info'>
          <li><img className='profile-index' src={`${this.props.user.profile_url}`} /></li>
          <li>{this.props.user.username}</li>
        </ul>
        <img src={`${this.props.photo.img_url}`} />
        <p className='index-item-info2'>
          {this.props.photo.title}
          <br/>
          {deleteButton}
        </p>


      </li>)
  }
}

export default PhotoIndexItem;

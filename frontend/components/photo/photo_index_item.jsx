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
      <li className='index-items'>
          <img src={`${this.props.photo.img_url}`} />
          {this.props.photo.title}
          {this.props.photo.description}

          {deleteButton}
      </li>)
  }
}

export default PhotoIndexItem;

import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <li className='index-items'>
        <ul className='index-item-info'>
          <li><img className='profile-index' src={`${this.props.user.profile_url}`} /></li>
          <li><Link to={`/profile/${this.props.photo.artist_id}`}>{this.props.user.name}</Link></li>
        </ul>
        <img onClick={() => this.props.openModalShow(this.props.photo)} src={`${this.props.photo.img_url}`} />
        <p className='index-item-info2'>
          {this.props.photo.title}
        </p>
      </li>);
  }
}

export default PhotoIndexItem;

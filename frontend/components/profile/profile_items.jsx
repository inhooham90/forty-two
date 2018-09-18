import React from 'react';
import ReactModal from 'react-modal';

export default class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={() => this.props.openModalShow(this.props.photo)}>
        <img src={`${this.props.photo.img_url}`}/>
      </li>
    );
  }
}

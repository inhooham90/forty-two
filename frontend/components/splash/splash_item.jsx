import React from 'react';
import ReactModal from 'react-modal';

export default class SplashItem extends React.Component {
  constructor(props) {
    super(props);
  }

// style={{backgroundImage: "url(" + this.props.photo.img_url + ")"}}
  render() {
    return (
      <li>
        <img src={`${this.props.photo.img_url}`}/>
      </li>
    );
  }
}

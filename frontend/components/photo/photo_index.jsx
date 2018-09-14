import React from 'react';
import { Link, Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import PhotoUploadContainer from './upload_form_container';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {active: false};
    this.openUpload = this.openUpload.bind(this);
    this.closeUpload = this.closeUpload.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  openUpload () {
    this.setState({active: true})
  }

  closeUpload () {
    debugger
    this.setState({active: false})
  }

  render() {
    let toggle;
    if (this.state.active === true) {
      toggle = 'modal-open-upload';
    } else {
      toggle = 'close-form';
    };

    const photos = this.props.photos.map(photo => {
      return (
        <PhotoIndexItem photo={photo} />
      );
    });

      return (
        <div>
          <header className="header">
            <nav className="header-nav">

              <ul className="header-list">
                <li><Link className='logo' to='/'><img className='nav-logo' src={window.logoURL2}/></Link></li>
                <li>Discover</li>
                <li>About</li>
              </ul>

              <ul className="header-list">
                <li></li>
                <li><img className='profile-mini' src={window.defaultProfileURL}/></li>
                <li onClick={this.openUpload} className='upload-button'><Link to='/'><img className='upload-arrow' src={window.uploadArrow}/>Upload</Link></li>
              </ul>
            </nav>
          </header>
          <div>
            <ul>
              {photos}
            </ul>
          </div>


            <div className={toggle}>
              <div className='modal-main'>
                <PhotoUploadContainer />
              </div>
              <button className='cancel-transp' onClick={this.closeUpload}>Cancel</button>
            </div>


          <button onClick={this.handleClick}>Log Out</button>
        </div>
      )
  }
}

export default PhotoIndex;

import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import PhotoUploadContainer from './upload_form_container';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {activateProfileDrop: false};
    this.openProfile = this.openProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
  }

  componentWillMount(){
    this.props.fetchPhotos();
  }

  componentWillUnmount() {
    this.props.fetchPhotos();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  openProfile () {
    this.setState({activateProfileDrop: true})
  }

  closeProfile () {
    this.setState({activateProfileDrop: false})
  }

  render() {
    let toggle;
    if (this.state.activateProfileDrop === true) {
      toggle = 'drop-down';
    } else {
      toggle = 'drop-down-closed';
    };

    const photoitems = this.props.photos.map((photo, key) => {
      return (
        <PhotoIndexItem
          photo={photo}
          currentUserId={this.props.currentUserId}
          key={key}
          user={this.props.users[photo.artist_id]}
          openModalShow={this.props.openModalShow}
          fetchUser={this.props.fetchUser}/>
      );
    });

      return (
        <div>
          <header className="header">
            <nav className="header-nav">

              <ul className="header-list">
                <li><Link className='logo' to='/'><img className='nav-logo' src={window.logoURL2}/></Link></li>
                <li><Link to='/discover'>Discover</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>

              <ul className="header-drop-down">
                <li
                  onMouseEnter={this.openProfile}
                  onMouseLeave={this.closeProfile}>
                  <ul className='drop-down-child'>
                              <img className='profile-mini' src={window.defaultProfileURL}/>
                            <li>
                              <ul
                                onMouseEnter={this.openProfile}
                                onMouseLeave={this.closeProfile}
                                className={toggle}>
                                <li><Link to={`/profile/${this.props.currentUserId}`}>My Profile</Link></li>
                                <li>test2</li>
                                <li onClick={this.handleClick}>Log out</li>
                              </ul>
                            </li>
                  </ul>
                </li>
                <li className='upload-button' onClick={() => this.props.openModal('upload')}>
                  <img className='upload-arrow' src={window.uploadArrow}/>Upload
                </li>

              </ul>
            </nav>
          </header>
          <div>
            <ul className='index-list'>
              {photoitems}
            </ul>
          </div>
        </div>
      )
  }
}

export default PhotoIndex;

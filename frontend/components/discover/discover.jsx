import React from 'react';
import { Link } from 'react-router-dom';
import DiscoverItem from './discover_items';
import DiscoverContainer from './discover_container';

class Discover extends React.Component {
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
    const discoverItems = this.props.photos.map((photo, key) => {
      return (
        <DiscoverItem
          photo={photo}
          currentUserId={this.props.currentUserId}
          key={key}
          user={this.props.users[photo.artist_id]}
          openModalShow={this.props.openModalShow}
          fetchUser={this.props.fetchUser}/>
      );
    });
    let imgSrc = this.props.user.profile_url;
    if (this.props.user.profile_picture) {
      imgSrc = this.props.user.profile_picture.photo_url;
    }
    let discoverButton;
    if (this.props.currentUserId){
      discoverButton = (
        <ul className="header-drop-down">
        <li>
          <ul className='drop-down-child'
            onMouseEnter={this.openProfile}
            onMouseLeave={this.closeProfile}>
                  <div className='profile-mini-container'>
                      <img className='profile-mini' src={imgSrc}/>
                  </div>
                    <li>
                      <ul
                        onMouseEnter={this.openProfile}
                        onMouseLeave={this.closeProfile}
                        className={toggle}>
                        <li><Link to={`/profile/${this.props.currentUserId}`}>My Profile</Link></li>

                        <li onClick={this.handleClick}>Log out</li>
                      </ul>
                    </li>
          </ul>
        </li>
        <li className='upload-button' onClick={() => this.props.openModal('upload')}>
          <img className='upload-arrow' src={window.uploadArrow}/>Upload
        </li>

      </ul>)
    } else {
      discoverButton = (
        <ul className="header-drop-down">
          <li>
            <Link className='blank-buttonb' to='/login'>Log In</Link>
          </li>
          <li>
            <Link className='color-buttons' to='/signup'>Sign Up</Link>
          </li>
        </ul>)
    }


      return (
        <div>
          <header className="header">
            <nav className="header-nav">

              <ul className="header-list">
                <li><Link className='logo' to='/'><img className='nav-logo' src={window.logoURL2}/></Link></li>
                <li><Link to='/discover'>Discover</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>

              {discoverButton}
            </nav>
          </header>
          <div>
            <ul className='gallery'>
              {discoverItems}
            </ul>
          </div>
        </div>
      )
  }
}

export default Discover;

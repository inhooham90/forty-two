import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from './profile_items';
import ProfileContainer from './profile_container';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activateProfileDrop: false
    };
    this.openProfile = this.openProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.userId)
    }
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

    if(!this.props.user) {
      return <div></div>
    }
    const photoitems = this.props.photos.map((photo, key) => {
      return (
        <ProfileItem
          photo={photo}
          key={key}
          openModalShow={this.props.openModalShow}
          />
      );
    });
    let followButton;
    if (!this.props.user.followers.includes(this.props.currentUserId)) {
      followButton = 'Follow';
    } else {
      followButton = 'Unfollow';
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

            <ul className="header-drop-down">
              <li
                onMouseEnter={this.openProfile}
                onMouseLeave={this.closeProfile}>
                <ul className='drop-down-child'>
                            <img className='profile-mini' src={this.props.user.profile_url}/>
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
          <ul className='profile-top'>
            <li>
              <img className='profile-original' src={this.props.user.profile_url}/>
            </li>
            <li>
              <section className='profile-name'>
                {this.props.user.name}
              </section>
            </li>
            <li>
              <section className='profile-username'>
                {this.props.user.username}
              </section>
            </li>
            <li>
              <p>
                {this.props.user.followers.length} Followers {this.props.user.following.length} Following
              </p>
            </li>
            <li>
              <button className='button-follow'>{followButton}</button>
            </li>
          </ul>
        </div>

        <div>
          <ul className='profile-images'>
            {photoitems}
          </ul>
        </div>
      </div>
    )
  }
}

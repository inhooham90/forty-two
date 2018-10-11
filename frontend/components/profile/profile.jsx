import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from './profile_items';
import ProfileContainer from './profile_container';
import ProfileUploadContainer from './profile_upload_container';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activateProfileDrop: false,
      activatePersonal: false,
    };
    this.openProfile = this.openProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
    this.openPersonal = this.openPersonal.bind(this);
    this.closePersonal = this.closePersonal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  openProfile () {
    this.setState({activateProfileDrop: true, activatePersonal: false})
  }

  closeProfile () {
    this.setState({activateProfileDrop: false})
  }

  openPersonal () {
    if (parseInt(this.props.userId) === this.props.currentUserId){
      this.setState({activateProfileDrop: false, activatePersonal: true})
    }
  }

  closePersonal () {
    this.setState({activatePersonal: false})
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
    let followText;
    let action;
    if (!this.props.user.followers.includes(this.props.currentUserId)) {
      followText = 'Follow';
      action = id => this.props.followUser(id)
    } else {
      followText = 'Unfollow';
      action = id => this.props.unfollowUser(id)
    }
    let followButton;
    if (parseInt(this.props.userId) !== this.props.currentUserId) {
      followButton = (<li>
        <button
          className='button-follow'
          onClick={() => action(this.props.userId)}>
          {followText}
        </button>
      </li>);
    } else {
      followButton = (<li></li>);
    }
    let numberOfFollowers;
    if (this.props.user.followers.length < 2) {
      numberOfFollowers = "Follower"
    } else {
      numberOfFollowers = "Followers"
    }
    let profileUpdate;
    if (this.props.currentUserId === parseInt(this.props.userId)){
      profileUpdate = () => this.props.openModalProfile(parseInt(this.props.userId));
    } else {
      profileUpdate = () => console.log('nice try HACKER!');
    }

    let personal;
    if (this.state.activatePersonal) {
      personal = "personal-pictures-open";
    } else if (!this.state.activatePersonal) {
      personal = "personal-pictures-close";
    };

    let imgSrc = this.props.user.profile_url;
    if (this.props.user.profile_picture) {
      imgSrc = this.props.user.profile_picture.photo_url;
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
                  <img className='profile-mini' src={this.props.currentUser.profile_picture.photo_url}/>
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

            </ul>
          </nav>
        </header>

        <div>
          <ul className='profile-top'>
            <li className={personal}>
              <img
                onClick={this.openPersonal}
                className='profile-original'
                src={imgSrc}/>

              <ProfileUploadContainer
                currentUserId={this.props.currentUserId}
                cancel={this.closePersonal}
                />

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
                {this.props.user.followers.length}&nbsp;
                {numberOfFollowers} &nbsp;&nbsp;
                {this.props.user.followees.length}&nbsp;
                Following
              </p>
            </li>
            {followButton}
          </ul>
        </div>

        <div>
          <ul className='gallery'>
            {photoitems}
          </ul>
        </div>
      </div>
    )
  }
}
//line115 profile update modal
 // this.props.currentUserId === this.props.userId

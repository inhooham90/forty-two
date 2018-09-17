import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

      return (
        <div>
          <header className="header">
            <nav className="header-nav">

              <ul className="header-list">
                <li><Link className='logo' to='/'><img className='nav-logo' src={window.logoURL2}/></Link></li>
                <li>Discover</li>
                <li>About</li>
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
                                <li>test1</li>
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
        </div>
      )
  }
}

export default About;

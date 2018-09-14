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
                <li><NavLink to='/about'>About</NavLink></li>
              </ul>

              <ul className="header-list">
                <li></li>
                <li><img className='profile-mini' src={window.defaultProfileURL}/></li>
                <li className='upload-button'><Link to='/'><img className='upload-arrow' src={window.uploadArrow}/>Upload</Link></li>
              </ul>
            </nav>
          </header>

          <h1>Hello World</h1>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      )
  }
}

export default About;

import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    const navBar = this.props.currentUser ? (
      <div className='nav-bar'>
      <Link to='/'><img className='nav-logo' src={window.logoURL}/></Link>
        <ul>
          <li>
            <img className='profile-mini' src={window.defaultProfileURL}/>
          </li>
          <li className='nav-button' onClick={this.handleClick}>
            Log Out
          </li>
        </ul>
    </div>)
    :
    (<div className='nav-bar'>
      <Link to='/'><img className='nav-logo' src={window.logoURL}/></Link>
      <ul>
        <li>
          <Link  to='/login'>Log In</Link>
        </li>
        <li className='color-buttons'>
          <Link to='/signup'>Sign Up</Link>
        </li>
      </ul>
    </div>)

    return (
      <div className='splash-image'>
        {navBar}
        <div className='main-text'>Testfadsfadsfs</div>

      </div>
    )
  }
}

export default Splash;

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
          <Link className='nav-button' to='/login'>Log In</Link>
        </li>
        <li>
          <Link className='nav-button' to='/signup'>Sign Up</Link>
        </li>
      </ul>
    </div>)

    return (
      <div>
        {navBar}

      </div>
    )
  }
}

export default Splash;

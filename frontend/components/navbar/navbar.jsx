import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <Link to='/'> <img className='navLogo' src={window.logoURL}/> </Link>
          <h3>{this.props.currentUser.username}</h3>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/'> <img className='navLogo' src={window.logoURL}/> </Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Navbar;

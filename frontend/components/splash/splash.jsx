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

    const navBar = this.props.currentUser ? (<div>
      <Link to='/'><img className='navLogo' src={window.logoURL}/></Link>
      <h3>{this.props.currentUser.username}</h3>
      <button onClick={this.handleClick}>Log Out</button>
    </div>) : (<div>
      <Link to='/'><img className='navLogo' src={window.logoURL}/></Link>
      <Link className='navButton' to='/signup'>Sign Up</Link>
      <Link className='navButton' to='/login'>Log In</Link>
    </div>)

    return (
      <div className='splash-div'>
        {navBar}
      </div>
    )
  }
}

export default Splash;

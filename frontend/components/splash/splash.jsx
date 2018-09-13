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
    const navBar =
    (<div className='nav-bar'>
      <ul className="header-list-white">
        <li><Link to='/'><img className='nav-logo' src={window.logoURL}/></Link></li>
        <li>Discover</li>
        <li>About</li>
      </ul>
      <ul>
        <li>
          <Link className='blank-buttons' to='/login'>Log In</Link>
        </li>
        <li>
          <Link className='color-buttons' to='/signup'>Sign Up</Link>
        </li>
      </ul>
    </div>)

    return (
      <section>

        <div className='splash-image'>
          {navBar}
          <div className='main-text'>
            <h1>Get inspired and share your best photos</h1>
            <h3>Find your home among the world's best photographers</h3>
            <br/>
            <br/>
            <p><Link className='color-buttons2' to='/signup'>Join 42px</Link></p>
          </div>
        </div>
        <div>
          <div className='main-text2'>
            <h2>The top photos, chosen by you</h2>
            <h4>Discover what's trending according to photographers around the world</h4>
          </div>
        </div>
      </section>
    )
  }
}

export default Splash;

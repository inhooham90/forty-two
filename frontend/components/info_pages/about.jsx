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
                <li style={{color: '#0099e5'}} >About</li>
              </ul>
              <li>

              </li>
            </nav>
          </header>
          <section>

            <div className='about-image'>
              <div className='main-text'>
                <br/><br/>
                <h1>Welcome to 42px!</h1>
                <h3>A clone of 500px made by James Inhoo Ham. Check me out!</h3>
                <br/>
                <br/>
                <p><a className='color-buttons2' href='https://github.com/jamsuham22'>GitHub</a></p>
              </div>
            </div>
            <div>
              <div className='main-text2'>
                <h2>There isn't much here</h2>
                <h4>I admire your adventurous spirit!</h4>
              </div>
            </div>
          </section>
        </div>
      )
  }
}

export default About;

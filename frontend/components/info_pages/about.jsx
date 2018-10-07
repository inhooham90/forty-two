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
                <li><Link to='/discover'>Discover</Link></li>
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
                  <h3>A single page web app inspired by 500px, made by James Ham.</h3>

                  <br/>
                  <br/>
                  <p style={{"fontFamily":"sans-serif", "lineHeight":"1.5"}}>
                    In a world where anything can be replicated, I believe details are what <br/>
                    really makes the difference between the greatests and the others. <br/>
                  And the hearty details comes from love and passion of such crafts.

                  </p>
                  <h3>Click on the links below to check my other projects!</h3>
                    <div className='links'>
                      <a className='color-buttons2' href='https://github.com/jamsuham22'>GitHub</a>
                      <a className='color-buttons2' href='https://www.inhooham.com'>Website</a>
                      <a className='color-buttons2' href='https://angel.co/inhoo-j-ham'>Angel List</a>
                    </div>
              </div>
            </div>
            <div>
              <div className='main-text2' style={{"paddingTop":"2%"}}>
                <h4>
                  "To like something is to insult it. Love it or hate it. Be passionate. As civilisation advances, so does indifference. It is a disease. Immunize yourself with art. And love."
                </h4>
                <br/>
                <h4>
                  Matt Haig, The Humans
                </h4>
              </div>
            </div>
          </section>
        </div>
      )
  }
}

export default About;

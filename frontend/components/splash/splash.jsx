import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import About from '../info_pages/info_container';
import SplashItem from './splash_item';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }
  // componentWillMount(){
  //   this.props.fetchPhotos();
  //   debugger
  // }

  render() {
    const navBar =
    (<div className='nav-bar'>
      <ul className="header-list-white">
        <li><Link to='/'><img className='nav-logo' src={window.logoURL}/></Link></li>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/about'>About</Link></li>
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

        <ul className='splash-list'>
          <li className='splash-list-img'>
            <img  src={window.h1} />
          </li>
          <li className='splash-list-big'>
            <h2>
              Get global exposure
            </h2>


          <p style={{"paddingBottom":"40px"}}>
            Imagine having your photos seen by
            photographers like you from all over the world.
            When you upload your photos, they’re shared with
            42px members worldwide. Watch as your photos get
            reactions from the community—and see if your shot makes
            it to Popular.
          </p>
           <Link className='splash-info-button' to='/discover'>Discover</Link>
          </li>
        </ul>

        <ul className='splash-list'>
          <li className='splash-list-big'>
            <h2>
              Connect with photographers everywhere
            </h2>
            <p style={{"paddingBottom":"40px"}}>
              You’re not just joining a network—you’re joining a
              real community. Follow photographers to
              get their newest photos appearing in your home feed,
              share your thoughts by liking and commenting on photos,
              and discuss all the details of photography in groups.
            </p>
            <Link className='splash-info-button' to='/signup'>Sign Up</Link>
          </li>
          <li className='splash-list-img'>
            <img src={window.h2} />
          </li>
        </ul>
      </section>
    );
  }
}

export default Splash;

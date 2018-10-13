import React from 'react';
import { Provider } from 'react-redux';
import Splash from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import InfoContainer from './info_pages/info_container';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import PhotoIndexContainer from './photo/photo_index_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute, ProtectedRoutetoLogin } from '../util/route_util';
import Modal from './modal/modal';
import DiscoverContainer from './discover/discover_container';

const App = () => {

  return (
    <div>
      <Modal />
        <Switch>
          <Route path='/about' component={InfoContainer} />
          <Route path='/discover' component={DiscoverContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoutetoLogin path='/profile/:userId' component={ProfileContainer} />
          <ProtectedRoute path='/' component={PhotoIndexContainer} />
        </Switch>
    </div>

)};

export default App;

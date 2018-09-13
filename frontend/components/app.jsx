import React from 'react';
import { Provider } from 'react-redux';
import Splash from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import PhotoIndexContainer from './photo/photo_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

  return (
    <div>

        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path='/' component={PhotoIndexContainer} />
        </Switch>
    </div>

)};

export default App;

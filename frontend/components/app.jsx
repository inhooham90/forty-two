import React from 'react';
import { Provider } from 'react-redux';
import Splash from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Route } from 'react-router-dom';


const App = () => {
  return (
  <div >
    <Splash />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />

  </div>
)};

export default App;

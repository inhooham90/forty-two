import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Splash from '../components/splash/splash_container';
import Login from '../components/session_form/login_form_container';

//Higher Order Components: components that return other components

const Auth = ({ component: Component, path, loggedIn, exact }) => { //prevents logged in user from seeing log in / sign up
  function toRender(props) {
    if (loggedIn) {
      return <Redirect to='/' />;
    } else {
      return <Component {...props} />;
    }
  }
  return (
    <Route path={path} exact={exact} render={toRender} />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact, foo }) => { //prevents unlogged users from seeing the rest of site
  function toRender(props) {
    if (!loggedIn) {
      return <Splash />;
    } else {
      return <Component {...props} />;
    }
  }
  return (
    <Route path={path} exact={exact} render={toRender} />
  );
};

const ProtectedtoLogin = ({ component: Component, path, loggedIn, exact, foo }) => { //prevents unlogged users from seeing the rest of site
  function toRender(props) {
    if (!loggedIn) {
      return <Login />;
    } else {
      return <Component {...props} />;
    }
  }
  return (
    <Route path={path} exact={exact} render={toRender} />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  }
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedRoutetoLogin = withRouter(connect(mapStateToProps)(ProtectedtoLogin));

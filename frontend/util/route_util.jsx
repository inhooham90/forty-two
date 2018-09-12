import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

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
      return <Redirect to='/login' />;
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

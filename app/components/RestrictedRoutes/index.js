import React from 'react';
import {
    Redirect,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

const getAuth = function(role) {
  let canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
  );
  if (canUseDOM) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && role) {
      if (role === "user" || role == "stranger") {
        return true;
      } else if (role === "admin") {
        if (user._id === "5a62075953a7b0103d06a9e3") {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false
    }
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getAuth("user") ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getAuth("admin") ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const StrangerRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getAuth("stranger") ? (
      <Redirect to={{
        pathname: '/profile',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...rest} {...props} />
    )
  )}/>
)

module.exports = {
  PrivateRoute: PrivateRoute,
  AdminRoute: AdminRoute,
  StrangerRoute: StrangerRoute
}

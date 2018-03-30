import React from 'react';

import {
    Redirect,
    Route
} from 'react-router-dom';

const Authenticate = function() {
  const canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
  );
  if (canUseDOM) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return true;
    } else {
      return false
    }
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Authenticate() ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const StrangerRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Authenticate() ? (
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
  StrangerRoute: StrangerRoute
}

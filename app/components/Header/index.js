import React from 'react';
import PropTypes from 'prop-types';
const { NavLink } = require('react-router-dom');

export default function Header(props) {
  return (
    <header>
      <div id="header-upper">
        <div id="menu-left">
          <NavLink exact to="/"><h2> Eavesjob </h2></NavLink>
        </div>
        <div id="menu-right">
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </div>
        <div id="menu-mobile">
          <NavLink exact to="/"><h2> Eavesjob </h2></NavLink>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>
      <Verified user = {props.user}/>
    </header>
  )
}

function Verified(props) {
  function onResend() {
    console.log("send api request to email");
  }
  return (
    <div id="header-lower">
    {
      props.user && props.user.verified === false ?
      <div id="header-verified">
          <p><span> You have not verified your email address yet. Please do, so that we can send you career updates. </span><button onClick= {onResend} > Resend verification email</button></p>
      </div>
      : null
    }
    </div>

  )

}

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
const { NavLink } = require('react-router-dom');

import API_FULL from '../../../api_info';

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

class Verified extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSent: false,
      sentTo: "",
      error: ""
    };
  }
  onResend = () => {
    this.setState({
      emailSent: true
    }, function() {
      axios.get(`${API_FULL}/sendVerification/${this.props.user.token}`)
        .then((response) => {
          if (response.data.email) {
            this.setState({
              sentTo: response.data.email
            });
          }
        })
        .catch((error) => {
          var eMessage = error.response.data.error.message;
          this.setState({
            error: eMessage
          })
        })
    })
  }
  render() {
    return (
      <div id="header-lower">
      {
        this.props.user && this.props.user.verified === false ?
        <div id="header-verified">
            <p><span> You have not verified your email address yet. Please do, so that we can send you career updates. </span> {
              this.state.emailSent && this.state.sentTo ?
                <span> Email sent to {this.state.sentTo} </span>
              : this.state.emailSent ?
                  <span> Sending email .. </span>
                :
                  <button onClick= {this.onResend} ><span> Resend email verification </span></button>
            }
            </p>
        </div>
        : null
      }
      </div>

    )
  }
}

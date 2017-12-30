import React from 'react';
import PropTypes from 'prop-types';

class RedirectMember extends React.Component {
  constructor(props) {
    super(props);
    this.redirectMember = this.redirectMember.bind(this);
  }
  redirectMember() {
    location.href = '/login';
  }
  render() {
    return (
      <div className="single">
          <div className="form-redirect">
            <h2>Already a Member? </h2>
            <button onClick= {this.redirectMember} className="big-button">Login</button>
          </div>
      </div>
    )
  }
}

module.exports = {
  RedirectMember: RedirectMember
}

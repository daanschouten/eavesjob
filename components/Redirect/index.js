import React from 'react';
import PropTypes from 'prop-types';

export default class Redirect extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }
  redirect() {
    location.href = this.props.destination;
  }
  render() {
    return (
      <div className="single">
          <div className="form-redirect">
            <h2> {this.props.title} </h2>
            <button onClick= {this.redirect} className="big-button"> {this.props.message}</button>
          </div>
      </div>
    )
  }
}

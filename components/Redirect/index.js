import React from 'react';
import PropTypes from 'prop-types';
const { Link } = require('react-router-dom');

export default class HandleRedirect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="single">
          <div className="form-redirect">
            <h2> {this.props.title} </h2>
            <button className="big-button"><Link to={this.props.destination}>{this.props.message}</Link> </button>
          </div>
      </div>
    )
  }
}

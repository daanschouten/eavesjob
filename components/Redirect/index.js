import React from 'react';
import PropTypes from 'prop-types';
const { Link } = require('react-router-dom');

export default function HandleRedirect(props) {
  return (
    <div className="single">
        <div className="form-redirect">
          <h2> {props.title} </h2>
          <button className="big-button"><Link to={props.destination}>{props.message}</Link> </button>
        </div>
    </div>
  )
}

import React from 'react';
const { Link } = require('react-router-dom');

export default function Premium (props) {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1> Premium </h1>
            </div>
            <div className="single-text">
              <p> This feature will become available soon. </p>
            </div>
          </div>
          <div className="single">
              <div className="form-redirect">
                <h2> Back to Safety </h2>
                <button className="big-button"><Link to='/'>Visit Homepage</Link> </button>
              </div>
          </div>
        </div>
      </div>
    )
};

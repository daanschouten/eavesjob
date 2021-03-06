import React from 'react';
const { Link } = require('react-router-dom');

export default function NotFound(props) {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1>404: Page not Found</h1>
            </div>
            <div className="single-text">
              <p> The page you're attempting to visit doesn't exist. Are you sure you should be here? </p>
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

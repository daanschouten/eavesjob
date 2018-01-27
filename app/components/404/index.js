import React from 'react';
import Redirect from '../Redirect';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1>404: Page not Found</h1>
            </div>
            <p> The page you're attempting to visit doesn't exist. Are you sure you should be here? </p>
          </div>
          <Redirect destination= '/' title='Back to Safety' message='Visit Homepage'/>
        </div>
      </div>
    )
  }
};

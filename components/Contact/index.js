const React = require('react');
const PropTypes = require('prop-types');
const { RequestWebsiteForm } = require('../Forms');

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//  
//     )
//   }
// }

class RequestWebsite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1>Request a New Career Page</h1>
            </div>
            <RequestWebsiteForm/>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  // Contact: Contact,
  RequestWebsite: RequestWebsite
}

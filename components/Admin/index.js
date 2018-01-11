const React = require('react');
const PropTypes = require('prop-types');
const { KeywordForm } = require('../Forms');
const { AddWebsiteForm } = require('../Forms');

class AddKeyword extends React.Component {
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1>Add Keywords</h1>
            </div>
            <KeywordForm />
          </div>
        </div>
      </div>
    );
  }
}

class AddWebsite extends React.Component {
  render() {
    return (
      <div className="container-single">
        <div className="container-center">
          <div className="single">
            <div className="form-title">
              <h1>Add New Website</h1>
            </div>
            <AddWebsiteForm/>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  AddKeyword: AddKeyword,
  AddWebsite: AddWebsite
}

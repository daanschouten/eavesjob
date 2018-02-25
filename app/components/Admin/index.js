const React = require('react');
const PropTypes = require('prop-types');

const { KeywordForm } = require('../Forms');
const { AddWebsiteForm } = require('../Forms');
const { AddModifyForm } = require('../Forms');

function AddKeyword(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1>Add Keywords</h1>
          </div>
          <KeywordForm user = {props.user} />
        </div>
      </div>
    </div>
  );
}

function AddWebsite(props) {
  return (
    <div className="container-single">
      <div className="container-center">
          <AddWebsiteForm user = {props.user} />
      </div>
    </div>
  )
}

function AddModify(props) {
  return (
    <div className="container-single">
      <div className="container-center">
          <AddModifyForm user = {props.user} />
      </div>
    </div>
  )
}

module.exports = {
  AddKeyword: AddKeyword,
  AddWebsite: AddWebsite,
  AddModify: AddModify
}

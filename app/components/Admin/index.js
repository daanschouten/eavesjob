import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const {
  KeywordForm,
  AddWebsiteForm,
  AddModifyForm,
  IssueForm
} = require('../Forms');

function ReadIssues(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> Read about all them issues </h1>
          </div>
          <IssueForm user = {props.user} />
        </div>
      </div>
    </div>
  );
}

ReadIssues.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  })
}


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

AddKeyword.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  })
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

AddWebsite.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  })
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

AddModify.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  })
}

module.exports = {
  AddKeyword: AddKeyword,
  AddWebsite: AddWebsite,
  AddModify: AddModify,
  ReadIssues: ReadIssues
}

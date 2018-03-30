import React from 'react';
import PropTypes from 'prop-types';
import {
    Redirect,
    Route
} from 'react-router-dom';

const {
  ModifyWebsiteForm,
  ReportWebsiteForm,
  ContactForm } = require('../Forms');

function ModifyWebsite(props) {
  return props.location.query ?
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> {"Add page to " + props.location.query.website.name } </h1>
          </div>
          <ModifyWebsiteForm website= {props.location.query.website} user = {props.user} />
        </div>
      </div>
    </div>
  : <Redirect to={{
      pathname: '/browse'
    }}/>
}

ModifyWebsite.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  }),
  location: PropTypes.shape({
    query: PropTypes.shape({
      website: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.shape({
             href: PropTypes.string.isRequired
        })).isRequired
      })
    })
  })
}

function ReportWebsite(props) {
  return props.location.query ?
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> {"Report issue with " + props.location.query.website.name } </h1>
          </div>
          <ReportWebsiteForm website= {props.location.query.website} user = {props.user} />
        </div>
      </div>
    </div>
  : <Redirect to={{
      pathname: '/browse'
    }}/>
}

ReportWebsite.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  }),
  location: PropTypes.shape({
    query: PropTypes.shape({
      website: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.shape({
             href: PropTypes.string.isRequired
        })).isRequired
      })
    })
  })
}

function Contact(props) {
  return (
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> Contact us </h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

module.exports = {
  ModifyWebsite: ModifyWebsite,
  ReportWebsite: ReportWebsite,
  Contact: Contact
}

const React = require('react');
const PropTypes = require('prop-types');
const { ModifyWebsiteForm } = require('../Forms');
const { ReportWebsiteForm } = require('../Forms');
const { ContactForm } = require('../Forms');

function ModifyWebsite(props) {
  return props.location.query ?
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> {"Add page to " + props.location.query.website.name } </h1>
          </div>
          <ModifyWebsiteForm website= {props.location.query.website} />
        </div>
      </div>
    </div>
  : null
}

function ReportWebsite(props) {
  return props.location.query ?
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> {"Report issue with " + props.location.query.website.name } </h1>
          </div>
          <ReportWebsiteForm website= {props.location.query.website} />
        </div>
      </div>
    </div>
  : null
}

// change null to redirect or 404 or other thing

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

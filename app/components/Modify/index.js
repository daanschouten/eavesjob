const React = require('react');
const PropTypes = require('prop-types');
const { ModifyWebsiteForm } = require('../Forms');

function ModifyWebsite(props) {
  return props.location.query ?
    <div className="container-single">
      <div className="container-center">
        <div className="single">
          <div className="form-title">
            <h1> Modify Website </h1>
          </div>
          <ModifyWebsiteForm website= {props.location.query.website} />
        </div>
      </div>
    </div>
  : null
}

module.exports = {
  ModifyWebsite: ModifyWebsite
}

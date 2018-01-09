const React = require('react');
const PropTypes = require('prop-types');

const { Link } = require('react-router-dom');
const { Available } = require('../Retrieve');

function Profile(props) {
  function handleSubscribe(e) {
    props.onSubscribe(e.target.value);
  }
  function handleUnsubscribe(e) {
    props.onUnsubscribe(e.target.value);
  }
  return (
    <div id="browse-page">
      <div id="browse-left">
        <div id="search-website">
          <h2>selected career pages</h2>
          <div className="search-div">
            <button className="big-button" value={"hasadsds"} onClick = {handleSubscribe}> Subscribe </button>
            <button className="big-button" value={"hasadsds"} onClick = {handleUnsubscribe}> Remove </button>
          </div>
        </div>
        <Available available = {props.user}/>
        <div id="profile-premium">
          <h2>go premium</h2>
        </div>
      </div>
      <div className="right-sidebar">
        <div id="welcome-user">
          <div className="right-sidebar-title">
            <p>Hi {props.user.firstName}!</p>
            <button className="big-button" onClick = {props.handleLogout}> Log out </button>
          </div>
        </div>
        <div className="request-website">
          <div className="right-sidebar-title">
            <h2>find more career pages </h2>
          </div>
          <div className="single-text">
            <p> </p>
          </div>
          <div className="single-text">
            <button className="big-button"><Link to='/browse'>browse career pages</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = {
  Profile: Profile
}

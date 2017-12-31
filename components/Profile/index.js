const React = require('react');
const PropTypes = require('prop-types');

const { Available } = require('../Retrieve');

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: this.props.available,
      monitored: this.props.monitored
    };
    this.logout = this.logout.bind(this);
  }
  logout() {

  }
  render() {
    return (
      <div id="browse-page">
        <div id="browse-left">
          <div id="search-website">
            <h2>selected career pages</h2>
            <div class="search-div">  </div>
          </div>
          <Available />
          <div id="profile-premium">
            <h2>go premium</h2>
          </div>
        </div>
        <div class="right-sidebar">
          <div id="welcome-user">
            <div class="right-sidebar-title">
              <p>Hi !</p>
              <button onclick="location.href='/logout'">log out</button>
            </div>
          </div>
          <div class="request-website">
            <div class="right-sidebar-title">
              <h2>find more career pages </h2>
            </div>
            <div class="single-text">
              <p> </p>
            </div>
            <div class="single-text">
              <button onclick="location.href='/browse'">browse career pages</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

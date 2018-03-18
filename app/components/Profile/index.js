import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const { Link } = require('react-router-dom');
const { Available } = require('../Browse');
import Toggle from '../Toggle';

function ProfileOption(props) {
  function onToggle() {
    props.onChange(props.name);
  }
  return (
    <div className="website-full">
      <div className="website-single">
        <div className="website-name">
          <p>{props.title}</p>
        </div>
        <div className="website-monitor ">
          <Toggle
          monitored = {props.monitored}
          onToggle = {onToggle} />
        </div>
      </div>
    </div>
  )
}

ProfileOption.propTypes = {
  onToggle: PropTypes.func,
  name: PropTypes.string,
  monitored: PropTypes.bool
}

class ProfileSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
          emailVerified: false,
          wantsDailyEmail: false,
          wantsWeeklyEmail: false
      },
      error: ""
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user ) {
      this.retrieveUser(nextProps.user.token);
    }
  }
  onChange = (name) => {
    axios.post(`http://localhost:3000/changeEmail/${this.props.user.token}`, {
      emailChange: [name, this.state.user[name]]
    })
    .then((response) => {
      this.retrieveUser(this.props.user.token);
    })
    .catch((error) => {
      console.log("error fetching and parsing data", error);
    })
  }
  retrieveUser = (token) => {
    axios.get(`http://localhost:3000/profile/${token}`)
      .then((response) => {
        if (response.data.user) {
          this.setState({
            user: response.data.user
          });
        }
      })
      .catch((error) => {
        var eMessage = error.response.data.error.message;
        this.setState({
          error: eMessage
        })
      })
  }
  render () {
    return (
      <div className="right-sidebar">
          <div id="monitored-websites">
            <div className="right-sidebar-title">
              <h2>Email Settings</h2>
              {
                this.state.user.emailVerified ?
                  null
                :
                  <p> Email not verified. </p>
              }
            </div>
            <ProfileOption onChange = {this.onChange} name="wantsDailyEmail" title = "Receive email when career page updates." monitored = {this.state.user.wantsDailyEmail} />
            <ProfileOption onChange = {this.onChange} name="wantsWeeklyEmail" title = "Receive weekly email with summary of updates." monitored = {this.state.user.wantsWeeklyEmail} />
            <div className="right-sidebar-title">
              <p> Want to monitor more than 10 pages? </p>
            </div>
            <button className="big-button"><Link to='/premium'> Go Premium </Link> </button>
          </div>
      </div>
    )
  }

}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      monitored: []
    };
  }
  componentDidMount() {
    if (this.props.user.token ) {
      this.setState({
        user: this.props.user
      }, function() {
        this.searchMonitored();
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user ) {
      this.setState({
        user: nextProps.user
      }, function() {
        this.searchMonitored();
      })
    }
  }
  onChangeSubscribe = (site) => {
    for (var i = 0; i < this.state.monitored.length; i++) {
      if (this.state.monitored[i]._id === site) {
        // remove from monitor
        axios.post(`http://localhost:3000/removeSubscribe/${this.props.user.token}`, {
          id: site
        })
        .then((response) => {
          // perform an entire search, reload all of it
          this.searchMonitored();
        })
        .catch((error) => {
          console.log("error fetching and parsing data", error);
        })
      }
    }
  }
  searchMonitored = () => {
    // refresh both monitored & available
    axios.post(`http://localhost:3000/updateMonitored/${this.state.user.token}`, {
      query: this.state.query
    })
    .then((response) => {
      let data = response.data;
      this.setState({
        monitored: data.monitored
      })
    })
    .catch((error) => {
      console.log("error fetching and parsing data", error);
    })
  }
  render() {
    return (
        <div id="two-thirds-page">
          <div id="two-thirds-left">
            <div id="search-website">
              <div id="search-upper">
                <h2>Selected Career Pages</h2>
                <div id="top-buttons">
                  <button className="big-button"><Link to='/browse'> Browse </Link> </button>
                  <button className="big-button" style={{"padding": "10px 15px"}} onClick = {this.props.handleLogout}> Log out </button>
                </div>
              </div>
            </div>
            <Available
            onChangeSubscribe = {this.onChangeSubscribe}
            available = {this.state.monitored} />
          </div>
          <ProfileSide user = {this.state.user} />
        </div>
    )
  }
}

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string
  })
}

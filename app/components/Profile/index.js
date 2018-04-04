import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

const { Link } = require('react-router-dom');
import Toggle from '../Toggle';

import API_FULL from '../../../api_info';

function Monitored(props) {
  return (
    <div className="single" style={{
      width: "100%",
      background: "none",
      border: "none" }}>
        {
          props.available && props.available.length > 0 ?
              <div id="large-list">
                <div className="website-full">
                  <div className="website-single">
                    <div className="website-name">
                      <h3> name </h3>
                    </div>
                    <div className="website-details">
                      <h3> links </h3>
                    </div>
                    <div className="website-date">
                      <h3> new opportunity </h3>
                    </div>
                    <div className="website-monitor">
                      <h3> toggle </h3>
                    </div>
                  </div>
                </div>
                {
                  props.available.map(function(website){
                    return (
                      <SingleWebsite
                       onChangeSubscribe = {props.onChangeSubscribe}
                       website= {website}
                       key= {website._id} /> )
                  })
                }
              </div>
          : props.query ?
              <RequestWebsiteForm query = {props.query} user = {props.user} onRequest = {props.onRequest}/>
            : <NoneMonitoredProfile/>
        }
    </div>
  )
}

Monitored.propTypes = {
  onChangeSubscribe: PropTypes.func.isRequired,
  available: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    monitored: PropTypes.bool.isRequired,
    pageUpdates: PropTypes.array,
    links: PropTypes.arrayOf(PropTypes.shape({
         href: PropTypes.string
    })).isRequired
  }))
}

function SingleWebsiteLink(props) {
  return (
    <Link to={props.link.href} target= "_blank"> {props.link.pathname} </Link>
  )
}

function SingleWebsiteExpanded(props) {
  return props.expand === true ?
    <div className="website-expanded">
      {
        props.website.links.map(function(link) {
          return (
            <SingleWebsiteLink link = {link} key= {link.href} />
          )
        })
      }
      <div>
        <button className="small-button"><Link to={{ pathname: '/modify', query: { website: props.website } }}> Add Link </Link></button>
        <button className="small-button"><Link to={{ pathname: '/report', query: { website: props.website } }}> Report Issue </Link></button>
      </div>
    </div>
  : null
}

SingleWebsiteExpanded.propTypes = {
  expand: PropTypes.bool.isRequired,
  website: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
         href: PropTypes.string.isRequired
    })).isRequired
  })
}

class SingleWebsite extends React.Component {
  constructor() {
    super();
    this.state = {
      expand: false
    }
  }
  getMostRecent = (updates) => {
    let mostRecent = "";
    updates.map(function(update){
      if (update.date > mostRecent && update.relevant === true || mostRecent === "" && update.relevant === true) {
        mostRecent = update.date;
      }
    })
    mostRecent === "" ? mostRecent = "new arrival" : mostRecent = moment(mostRecent).fromNow();
    return mostRecent;
  }
  onToggle = () => {
    this.props.onChangeSubscribe(this.props.website._id);
  }
  expandWebsite = () => {
    // change icon as well
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  }
  render() {
    return (
      <div className="website-full">
        <div className="website-single">
          <div className="website-name">
            <p>{this.props.website.name}</p>
          </div>
          <div className="website-details">
            {
              this.state.expand === true ?
                  <button onClick= {this.expandWebsite} ><img src="../../img/up-arrow.svg" alt="arrow up" /></button>
              : <button onClick= {this.expandWebsite} ><img src="../../img/down-arrow.svg" alt="arrow down" /></button>
            }

          </div>
          <div className="website-date">
            {
              this.props.website.robotsAllow !== false && this.props.website.issue === 0 ?
                <p> {this.getMostRecent(this.props.website.pageUpdates)}</p>
              : <Link to='/support/robots' style={{fontSize: "15px", textDecoration: "underline"}}> monitoring impossible </Link>
            }
          </div>
          <div className="website-monitor ">
            <Toggle
            monitored = {this.props.website.monitored}
            onToggle = {this.onToggle}/>
          </div>
        </div>
        <SingleWebsiteExpanded expand = {this.state.expand} website = {this.props.website} />
      </div>
    )
  }
}

SingleWebsite.propTypes = {
  onChangeSubscribe: PropTypes.func.isRequired,
  website: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    monitored: PropTypes.bool.isRequired,
    pageUpdates: PropTypes.array,
    links: PropTypes.arrayOf(PropTypes.shape({
         href: PropTypes.string
    })).isRequired
  })
}

function NoneMonitoredProfile() {
  return (
      <p> No career pages to display. </p>
  )
}

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
    axios.post(`${API_FULL}/changeEmail/${this.props.user.token}`, {
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
    axios.get(`${API_FULL}/profile/${token}`)
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
            <div className="right-sidebar-title">
              <p> Want to monitor more than 10 pages? </p>
            </div>
            <button className="big-button"><Link to='/premium'> Go Premium </Link> </button>
          </div>
      </div>
    )
  }
}

// <ProfileOption onChange = {this.onChange} name="wantsWeeklyEmail" title = "Receive weekly email with summary of updates." monitored = {this.state.user.wantsWeeklyEmail} />

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
        axios.post(`${API_FULL}/removeSubscribe/${this.props.user.token}`, {
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
    axios.get(`${API_FULL}/updateMonitored/${this.state.user.token}`)
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
            <Monitored
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

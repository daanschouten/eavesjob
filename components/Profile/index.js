const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';

const { Link } = require('react-router-dom');
const { Available } = require('../Browse');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      monitored: []
    };
    this.onChangeSubscribe = this.onChangeSubscribe.bind(this);
    this.searchMonitored = this.searchMonitored.bind(this);
  }
  componentDidMount() {
    if (this.props.user) {
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
  onChangeSubscribe(site) {
    for (var i = 0; i < this.state.monitored.length; i++) {
      if (this.state.monitored[i]._id === site) {
        // remove from monitor
        axios.post(`http://localhost:3000/removeSubscribe/${this.props.user._id}`, {
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
  searchMonitored() {
    // refresh both monitored & available
    axios.post(`http://localhost:3000/updateMonitored/${this.state.user._id}`, {
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
              <h2>selected career pages</h2>
            </div>
            <Available
            onChangeSubscribe = {this.onChangeSubscribe}
            available = {this.state.monitored} />
            <div id="profile-premium">
              <h2>go premium</h2>
            </div>
          </div>
          <div className="right-sidebar">
            <div id="welcome-user">
              <div className="right-sidebar-title">
                <p>Hi {this.props.user.firstName}!</p>
                <button className="big-button" onClick = {this.props.handleLogout}> Log out </button>
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
}

module.exports = {
  Profile: Profile
}

const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';

const { Link } = require('react-router-dom');
const { Available } = require('../Browse');

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      monitored: []
    };
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
              <h2>selected career pages</h2>
              <div id="top-buttons">
                <button className="big-button"><Link to='/browse'> Browse </Link> </button>
                <button className="big-button" onClick = {this.props.handleLogout}> Log out </button>
              </div>
            </div>
            <Available
            onChangeSubscribe = {this.onChangeSubscribe}
            available = {this.state.monitored} />
          </div>
          <div className="right-sidebar">
            <div id="monitored-websites">
              <div className="right-sidebar-title">
                <p> Want to monitor more than 5 pages? Upgrade to a premium account at the cost of a cappucino. </p>
              </div>
              <button className="big-button"><Link to='/premium'> Go Premium </Link> </button>
            </div>
          </div>
        </div>
    )
  }
}

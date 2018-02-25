const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';
const { Link } = require('react-router-dom');

const { RequestWebsiteForm } = require('../Forms');
const { Toggle } = require('../Toggle');

function NoneMonitoredBrowse() {
  return (
    <div id="monitored-websites">
      <div className="right-sidebar-title">
        <p> You haven't selected any career page yet! Check out our <Link to='/support/subscribing'>support section</Link> if you're not sure how to. </p>
      </div>
    </div>
  )
}

function NoneMonitoredProfile() {
  return (
      <p> You haven't selected any career pages yet. </p>
  )
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
            <SingleWebsiteLink link = {link} key= {link.origin} />
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

class SingleWebsite extends React.Component {
  constructor() {
    super();
    this.state = {
      expand: false
    }
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
              this.props.website.robotsAllow === true ?
                <p>{this.props.website.storedPage.date}</p>
              : <Link to='/support/robots' style={{fontSize: "15px", textDecoration: "underline"}}> website prevents monitoring </Link>
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

function Subscribed(props) {
  return (
    <div className="right-sidebar">
        {
          props.monitored && props.monitored.length > 0 ?
            <div id="monitored-websites">
              <div className="right-sidebar-title">
                <h2>subscribed career pages</h2>
              </div>
              {
                props.monitored.map(function(website){
                  return (
                    <SingleWebsite
                     onChangeSubscribe = {props.onChangeSubscribe}
                     website= {website}
                     key= {website._id} /> )
                })
              }
              <div className="right-sidebar-title">
                <h3> {`${props.limit - props.monitored.length} empty slot(s) remaining`}</h3>
              </div>
            </div>
          : <NoneMonitoredBrowse/>
        }
    </div>
  )
}

function Available(props) {
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
              <RequestWebsiteForm query = {props.query} user = {props.user} />
            : <NoneMonitoredProfile/>
        }
    </div>
  )
}

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    }
  }
  handleChange = (e) => {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj, function() {
      this.props.onQueryChange(this.state.query);
    });
  }
  render() {
    return (
      <div id="search-website">
        <h2> browse career pages </h2>
        <div className="search-div">
          <form className="search-form">
            <div className="search-bar">
              <input id="search-input" type="text" placeholder="organisation / company name" name="query" value={this.state.query}  onChange={this.handleChange}/>
              <button disabled="disabled">
                <img src="../../img/searchIcon.svg"/>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      query: "",
      available: [],
      monitored: [],
      limit: 0
    };
  }
  componentDidMount = () => {
    if (this.props.user) {
      this.setState({
        user: this.props.user
      }, function() {
        this.searchFull();
      })
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.user !== this.props.user ) {
      this.setState({
        user: nextProps.user
      }, function() {
        this.searchFull();
      })
    }
  }
  onQueryChange = (query) => {
    this.setState({
      query: query
    },
    function() {
      this.searchAvailable();
    }
    );
  }
  onChangeSubscribe = (site) => {
    let isMonitored = false;
    for (var i = 0; i < this.state.monitored.length; i++) {
      if (this.state.monitored[i]._id === site) {
        isMonitored = true;
        // remove from monitor
        axios.post(`http://localhost:3000/removeSubscribe/${this.props.user.token}`, {
          id: site
        })
        .then((response) => {
          // perform an entire search, reload all of it
          this.searchFull();
        })
        .catch((error) => {
          console.log("error fetching and parsing data", error);
        })
      }
    }
    if (!isMonitored) {
      // add site to monitor
      axios.post(`http://localhost:3000/addSubscribe/${this.props.user.token}`, {
        id: site
      })
      .then((response) => {
        this.searchFull();
        // perform an entire search, reload all);
      })
      .catch((error) => {
        console.log("error fetching and parsing data", error);
      })
    }
  }
  searchAvailable = () => {
    // refresh only available
    axios.post(`http://localhost:3000/search/${this.state.user.token}`, {
      query: this.state.query
    })
    .then((response) => {
      let data = response.data;
      this.setState({
        available: data.available
      })
    })
    .catch((error) => {
      console.log("error fetching and parsing data", error);
    })
  }
  searchFull = () => {
    // refresh both monitored & available
    axios.post(`http://localhost:3000/browse/${this.state.user.token}`, {
      query: this.state.query
    })
    .then((response) => {
      let data = response.data;
      this.setState({
        limit: data.limit,
        available: data.available,
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
          <Search onQueryChange = {this.onQueryChange} />
          <Available
          onChangeSubscribe = {this.onChangeSubscribe}
          user = {this.state.user}
          available = {this.state.available}
          query = {this.state.query} />
        </div>
        <Subscribed
        onChangeSubscribe = {this.onChangeSubscribe}
        monitored = {this.state.monitored}
        limit = {this.state.limit} />
      </div>
    )
  }
}

module.exports = {
  Browse: Browse,
  Available: Available
}

const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';
const { Link } = require('react-router-dom');

import HandleRedirect from '../Redirect';
const { RequestWebsiteForm } = require('../Forms');
const { Toggle } = require('../Toggle');

// <img src={require('../../img/search.svg')} />

function StartSearching() {
  return (
    <div> start searching div here </div>
  )
}

function NoResults() {
  return (
    <div> No results div here </div>
  )
}

function RequestWebsite(props) {
  // render actual form here instead of redirect?
  return (
    <div className="request-website">
      <div className="right-sidebar-title">
        <h2>request a career page</h2>
      </div>
      <div className="single-text">
        <p>Came across a careers page not listed here? Tell us about it, and we'll take it from there!</p>
      </div>
      <div className="single-text">
        <button className="big-button"><Link to='/requestwebsite'> request new website? </Link></button>
      </div>
    </div>
  )
}

function SingleSite(props) {
  function onToggle() {
    props.onChangeSubscribe(props.website._id);
  }
  return (
    <div className="single-website">
      <div className="single-name">
        <p>{props.website.name}</p>
      </div>
      <div className="single-date">
        <p>{props.website.storedPage.date}</p>
      </div>
      <div className="single-monitor ">
        <Toggle
        monitored = {props.website.monitored}
        onToggle = {onToggle}/>
      </div>
    </div>
  )
}

function Subscribed(props) {
  return (
    <div id="monitored-websites">
      <div className="right-sidebar-title">
        <h2>subscribed career pages</h2>
      </div>
      {
        props.monitored ?
          props.monitored.length > 0 ?
            props.monitored.map(function(website){
              return (
                <SingleSite
                 onChangeSubscribe = {props.onChangeSubscribe}
                 website= {website}
                 key= {website._id} /> )
            })
          : <NoResults/>
        : <StartSearching/>
      }
    </div>
  )
}

function HowItWorks(props) {
    return (
      <div className="container-single">
        <h1> see how it works </h1>
        <div className="container-center">

        </div>
      </div>
    )
}

function Available(props) {
  return (
    <div id="website-list">
      <div className= "single-website">
        <div className ="single-name">
          <p> name </p>
        </div>
        <div className = "single-date">
          <p> new career opportunity </p>
        </div>
        <div className= "single-monitor">
        </div>
      </div>
      {
        props.available ?
          props.available.length > 0 ?
            props.available.map(function(website){
              return (
                <SingleSite
                 onChangeSubscribe = {props.onChangeSubscribe}
                 website= {website}
                 key= {website._id} /> )
            })
          : <NoResults/>
        : <StartSearching/>
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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let returnObj = {};
    returnObj[e.target.name] = e.target.value;
    this.setState(returnObj, function() {
      this.props.onQueryChange(this.state.query);
    });
  }
  render() {
    return (
      <div id="search-website">
        <h2>browse career pages</h2>
        <div className="search-div">
          <form className="search-form">
            <div className="search-bar">
              <input id="search-input" type="text" placeholder="organisation / company name" name="query" value={this.state.query}  onChange={this.handleChange}/>
              <button disabled="disabled">
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
      monitored: []
    };
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onChangeSubscribe = this.onChangeSubscribe.bind(this);
    this.searchFull = this.searchFull.bind(this);
    this.searchAvailable = this.searchAvailable.bind(this);
  }
  componentDidMount() {
    if (this.props.user) {
      this.setState({
        user: this.props.user
      }, function() {
        this.searchFull();
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user ) {
      this.setState({
        user: nextProps.user
      }, function() {
        this.searchFull();
      })
    }
  }
  onQueryChange(query) {
    this.setState({
      query: query,
      available: []
    },
    function() {
      this.searchAvailable();
    }
    );
  }
  onChangeSubscribe(site) {
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
  searchAvailable() {
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
  searchFull() {
    // refresh both monitored & available
    axios.post(`http://localhost:3000/browse/${this.state.user.token}`, {
      query: this.state.query
    })
    .then((response) => {
      let data = response.data;
      this.setState({
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
          available = {this.state.available} />
        </div>
        <div className="right-sidebar">
          <Subscribed
          onChangeSubscribe = {this.onChangeSubscribe}
          monitored = {this.state.monitored} />
          <RequestWebsite/>
        </div>
      </div>
    )
  }
}

module.exports = {
  Browse: Browse,
  Available: Available
}

const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';
const { Link } = require('react-router-dom');

import HandleRedirect from '../Redirect';
const { RequestWebsiteForm } = require('../Forms');
const { Toggle } = require('../Toggle');

// function handleSubscribe(e) {
//   props.onSubscribe(e.target.value);
// }
// function handleUnsubscribe(e) {
//   props.onUnsubscribe(e.target.value);
// }

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

function SingleAvailable(props) {
  return(
    <div className="single-website">
      <div className="single-name">
        <p>{props.website.name}</p>
      </div>
      <div className="single-date">
        <p>{props.website.storedPage.date}</p>
      </div>
      <div className="single-monitor ">
        <Toggle />
      </div>
    </div>
  )
}

function SingleSubscribed(props) {
  return(
    <div className="single-website">
      <div className="single-name">
        <p> </p>
      </div>
      <div className="single-monitor">
        <Toggle />
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

    </div>
  )
}

function Available(props) {
  if (props.available) {
    if (props.available.length > 0) {
      // typed, and results, cool!
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
          { props.available.map(function(website){
                return <SingleAvailable
                 website= {website}
                 key= {website._id} />
            })
          }
        </div>
      )
    } else {
      // typed, but no results, sorry!
      return (
        <NoResults/>
      )
    }
  } else {
    // nothing typed yet, start searching!
    return (
      <StartSearching/>
    )
  }
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
          <form className="search-form" onSubmit={this.searchWebsite}>
            <div className="search-bar">
              <input id="search-input" type="text" placeholder="organisation / company name" name="query" value={this.state.query}  onChange={this.handleChange}/>
              <button disabled="disabled">
                <img src="../img/search.svg"/>
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
      query: ""
    };
    this.onQueryChange = this.onQueryChange.bind(this);
    this.searchWebsite = this.searchWebsite.bind(this);
    this.shouldSearch = this.shouldSearch.bind(this);
  }
  onQueryChange(query) {
    this.setState({
      query: query,
      available: [],
      monitored: []
    },
    function() {
      this.shouldSearch();
    }
    );
  }
  shouldSearch() {
    if (this.state.query === "") {
      console.log("query is empty");
      // render instructions
    } else if (this.props.user._id) {
      this.searchWebsite();
      // query is non empty and user exists, execute API call
    } else {
      console.log("state changed, but user undefined");
    }
  }
  searchWebsite() {
    // perform API call
    axios.post(`http://localhost:3000/search/${this.props.user._id}`, {
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
      <div id="browse-page">
        <div id="browse-left">
          <Search onQueryChange = {this.onQueryChange} />
          <Available
          onSubscribe = {this.props.onSubscribe}
          onUnsubscribe = {this.props.onUnsubscribe}
          available = {this.state.available} />
        </div>
        <div className="right-sidebar">
          <Subscribed
          onUnsubscribe = {this.props.onUnsubscribe}
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

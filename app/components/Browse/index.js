import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

const { Link } = require('react-router-dom');
const { RequestWebsiteForm } = require('../Forms');
import Toggle from '../Toggle';

import API_FULL from '../../../api_info';

function SuccessRequest(props) {
  return (
    <div id="search-lower">
    {
      props.madeRequest ?
        <p> You have successfully requested a career page. Once verified, it will be added to your subscribes automatically. </p>
      : null
    }
    </div>
  )
}

function NoneMonitoredBrowse() {
  return (
    <div id="monitored-websites">
      <div className="right-sidebar-title">
        <p> You haven't selected any career page yet! Read our <Link to='/support/subscribing'>support section</Link> if you're unsure how to. </p>
      </div>
    </div>
  )
}

function SearchGuidance() {
  return (
      <p> Start typing to find career pages. <span> <Link to="/about" style={{"textDecoration": "underline"}}> Why is Eavesjob search-based? </Link></span></p>
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

function Subscribed(props) {
  return (
    <div className="right-sidebar">
        {
          props.monitored && props.monitored.length > 0 ?
            <div id="monitored-websites">
              <div className="right-sidebar-title">
                <h2>Subscribed Career Pages</h2>
              </div>
              <div className="right-sidebar-text">
                <p> By default, you will receive an email when a vacancy appears on the career page of one of the companies below. You can change your email settings in your <Link to='/profile'>profile</Link>. </p>
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

Subscribed.propTypes = {
  onChangeSubscribe: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  monitored: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    monitored: PropTypes.bool.isRequired,
    pageUpdates: PropTypes.array,
    links: PropTypes.arrayOf(PropTypes.shape({
         href: PropTypes.string
    })).isRequired
  }))
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
            : <SearchGuidance/>
        }
    </div>
  )
}

Available.propTypes = {
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

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      madeRequest: false
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.madeRequest !== this.props.madeRequest ) {
      let newState = {};
      nextProps.madeRequest === false ?
        newState = {
          madeRequest: nextProps.madeRequest
        }
      : newState = {
          madeRequest: nextProps.madeRequest,
          query: ""
      };
      this.setState(newState, function() {
        this.props.onQueryChange(this.state.query);
      });
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
      <div id="search-website" style={{"border": "1px solid #619B8A"}}>
        <div id="search-upper" style={{"padding": "34px 5%"}}>
          <h2> Browse Career Pages </h2>
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
        <SuccessRequest madeRequest = {this.state.madeRequest} />
      </div>
    )
  }
}

Search.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
}

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      query: "",
      available: [],
      monitored: [],
      limit: 0,
      madeRequest: false
    };
  }
  componentDidMount = () => {
    // searching isn't strictly necessary yet because query will be empty, so actual API call won't be executed.
    // but for a 2.0 version where there is an EJ button, a query could come in the url.
    if (this.props.user.token) {
      this.setState({
        user: this.props.user
      }, function() {
        this.state.query === "" ?
            this.searchMonitored() :
            this.searchFull();
      });
    }
  }
  componentWillReceiveProps = (nextProps) => {
    // see explanation in DidMount
    if (nextProps.user !== this.props.user ) {
      this.setState({
        user: nextProps.user
      }, function() {
        this.state.query === "" ?
            this.searchMonitored() :
            this.searchFull();
      });
    }
  }
  onRequest = () => {
    this.setState({
      madeRequest: true
    });
  }
  onQueryChange = (query) => {
    let newState = {};
    query === "" ?
      newState = {
        query: query
      }
    : newState = {
      query: query,
      madeRequest: false
    };
    this.setState(newState,
    function() {
      this.searchAvailable();
    });
  }
  onChangeSubscribe = (site) => {
    let isMonitored = false;
    for (var i = 0; i < this.state.monitored.length; i++) {
      if (this.state.monitored[i]._id === site) {
        isMonitored = true;
        // remove from monitor
        axios.post(`${API_FULL}/removeSubscribe/${this.props.user.token}`, {
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
      axios.post(`${API_FULL}/addSubscribe/${this.props.user.token}`, {
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
  searchMonitored = () => {
    // refresh only monitored
    axios.post(`${API_FULL}/updateMonitored/${this.state.user.token}`, {
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
  searchAvailable = () => {
    // refresh only available, and only if someone has typed something.
    if (this.state.query !== "") {
      axios.post(`${API_FULL}/search/${this.state.user.token}`, {
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
    } else {
      if (this.state.available.length > 0) {
        this.setState({
          "available": []
        })
      }
    }
  }
  searchFull = () => {
    // refresh both monitored & available, only if query exists yet
    if (this.state.query !== "") {
      axios.post(`${API_FULL}/browse/${this.state.user.token}`, {
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
    } else {
      if (this.state.available.length > 0) {
        this.setState({
          "available": []
        })
      }
    }
  }
  render() {
    return (
      <div id="two-thirds-page">
        <div id="two-thirds-left">
          <Search onQueryChange = {this.onQueryChange} madeRequest = {this.state.madeRequest} />
          <Available
          onChangeSubscribe = {this.onChangeSubscribe}
          onRequest = {this.onRequest}
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

Browse.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string
  })
}

const React = require('react');
const PropTypes = require('prop-types');
import axios from 'axios';

const { RequestWebsiteForm } = require('../Forms');
const { Toggle } = require('../Toggle');

// function handleSubscribe(e) {
//   props.onSubscribe(e.target.value);
// }
// function handleUnsubscribe(e) {
//   props.onUnsubscribe(e.target.value);
// }

function NoResults() {
  return (
    <div> No results div here </div>
  )
}

function RequestWebsite() {
  return (
    <div className="request-website">
      <div className="right-sidebar-title">
        <h2>request a career page</h2>
      </div>
      <div className="single-text">
        <p>Came across a careers page not listed here? Tell us about it, and we'll take it from there!</p>
      </div>
      <div className="single-text">
        <button>request new website</button>
      </div>
    </div>
  )
}

function SingleAvailable(props) {
  return(
    <div className="single-website">
      <div className="single-name">
        <p></p>
      </div>
      <div className="single-date">
        <p></p>
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

// {props.subscribedWebsites.length > 0 ?
//   props.subscribedWebsites.map(function(website){
//     return <SingleSubscribed website={website} key={website._id}/>
//   })
// :
//   <NoResults/>
// }

function Subscribed(props) {
  return (
    <div id="monitored-websites">
      <div className="right-sidebar-title">
        <h2>subscribed career pages</h2>
      </div>

    </div>
  )
}

function Search(props) {
  return (
    <div id="search-website">
      <h2>browse career pages</h2>
      <div className="search-div">
        <form className="search-form">
          <div className="search-bar">
            <input id="search-input" type="text" placeholder="organisation / company name" name="name"/>
            <button disabled="disabled">
              <img src="../img/search.svg"/>
            </button>
          </div>
        </form>
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

    </div>
  )
}

// Available.propTypes = {
//   available: PropTypes.array.isRequired
// };

// <button className="big-button" value={"hasadsds"} onClick = {handleSubscribe}> Subscribe </button>
// <button className="big-button" value={"hasadsds"} onClick = {handleUnsubscribe}> Remove </button>

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      axios.get(`http://localhost:3000/browse/${nextProps.user.id}`)
        .then((response) => {
          this.setState({
              data: response.data
          })
        })
        .catch((error) => {
          console.log("error fetching and parsing data", error);
        })
    }
  }
  render() {
    return (
      <div id="browse-page">
        <div id="browse-left">
          <Search />
          <Available />
        </div>
        <div className="right-sidebar">
          <Subscribed
          onUnsubscribe = {this.props.onUnsubscribe} />
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

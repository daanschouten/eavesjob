const React = require('react');
const PropTypes = require('prop-types');

const { Subscribed } = require('../Retrieve');
const { SearchAvailable } = require('../Retrieve');
// set conditional for map function, necessary?

// import axios from 'axios';

// componentDidMount() {
//   axios.get('http://localhost:3000/browse/5a4fbaab010aa04fde5cd33e')
//     .then((response) => {
//       this.setState({
//           available: response.data
//       })
//     })
//     .catch((error) => {
//       console.log("error fetching and parsing data", error);
//     })
// }

// function handleSubscribe(e) {
//   props.onSubscribe(e.target.value);
// }
// function handleUnsubscribe(e) {
//   props.onUnsubscribe(e.target.value);
// }

function Browse(props) {
  return (
      <div id="browse-page">
        <SearchAvailable onUnsubscribe = {props.onUnsubscribe} onSubscribe = {props.onSubscribe} />
        <div className="right-sidebar">
          <Subscribed
            onUnsubscribe = {props.onUnsubscribe}
            subscribedWebsites = {props.user.subscribedWebsites} />
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
        </div>
      </div>
  )
}

// <button className="big-button" value={"hasadsds"} onClick = {handleSubscribe}> Subscribe </button>
// <button className="big-button" value={"hasadsds"} onClick = {handleUnsubscribe}> Remove </button>

module.exports = {
  Browse: Browse
}

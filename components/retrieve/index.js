const React = require('react');
const PropTypes = require('prop-types');
const { RequestWebsiteForm } = require('../Forms');
const { Toggle } = require('../Toggle');

function SingleWebsite(props) {
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

class Subscribed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div id="monitored-websites">
        <div className="right-sidebar-title">
          <h2>subscribed career pages</h2>
        </div>

      </div>
    )
  }
}

function Search(props) {
  return (
    <div id="search-website">
      <h2>Browse Career Pages</h2>
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

class SearchAvailable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div id="browse-left">
        <Search/>
        <Available available={{}}/>
      </div>
    )
  }
}

// Available.propTypes = {
//   available: PropTypes.array.isRequired
// };

module.exports = {
  SearchAvailable: SearchAvailable,
  Subscribed: Subscribed,
  SingleWebsite: SingleWebsite
}


// {this.props.available.length > 0 ?
//   this.props.available.map(function(website){
//     return <SingleWebsite website={website} key={website._id}/>
//   })
// :
//   <div> No results div here </div>
// }

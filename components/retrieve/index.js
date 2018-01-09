const React = require('react');
const PropTypes = require('prop-types');
const { RequestWebsiteForm } = require('../Forms');
const { Toggle } = require('../Toggle');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return(
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
}

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      website: this.props.website
    };
  }
  render() {
    return(
      <div className="single-website">
        <div className="single-logo">
          <p> {this.state.website.links[0].extension} </p>
        </div>
        <div className="single-name">
          <p> {this.state.website.name} </p>
        </div>
        <div className="single-date">
          <p> {this.state.website.storedPage.date}</p>
        </div>
        <div className="single-monitor ">
          <Toggle />
        </div>
      </div>
    )
  }
}

class Monitored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monitored: this.props.monitored
    };
  }
  render() {
    return (
      <div id="monitored-websites">
        <div className="right-sidebar-title">
          <h2>subscribed career pages</h2>
        </div>
        {this.state.monitored.length > 0 ?
          this.state.monitored.map(function(website){
            return <Single website={website} key={website._id}/>
          })
        :
          <div> No results div here </div>
        }
      </div>
    )
  }
}

Monitored.propTypes = {
  monitored: PropTypes.array.isRequired
};

class Available extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: this.props.available
    };
  }
  render() {
    return (
      <div id="website-list">
        <div className= "single-website">
          <div className="single-logo">
          </div>
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
}

// Available.propTypes = {
//   available: PropTypes.array.isRequired
// };

module.exports = {
  Search: Search,
  Monitored: Monitored,
  Available: Available
}

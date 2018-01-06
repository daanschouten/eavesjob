const React = require('react');
const PropTypes = require('prop-types');

const s = require('../retrieve');
const Available = s.Available;
const Monitored = s.Monitored;
const Search = s.Search;

// set conditional for map function, necessary?

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      available: this.props.available,
      monitored: this.props.monitored
    };
  }

  render() {
    return (
        <div id="browse-page">
          <div id="browse-left">
            <Search />
            <Available available = {this.state.available}/>
          </div>
          <div className="right-sidebar">
            <Monitored monitored = {this.state.monitored}/>
            <div class="request-website">
              <div class="right-sidebar-title">
                <h2>request a career page</h2>
              </div>
              <div class="single-text">
                <p>Came across a careers page not listed here? Tell us about it, and we'll take it from there!</p>
              </div>
              <div class="single-text">
                <button onclick="location.href='/requestWebsite'">request new website</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

module.exports = {
  Browse: Browse
}

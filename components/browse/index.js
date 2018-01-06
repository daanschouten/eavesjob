const React = require('react');
const PropTypes = require('prop-types');
// const fetch = require('fetch');
const s = require('../Retrieve');
// const Available = s.Available;
// const Monitored = s.Monitored;
// const Search = s.Search;
// set conditional for map function, necessary?

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      available: [],
      monitored: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/browse/5a4fbaab010aa04fde5cd33e')
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        available: responseData
      })
    })
    .catch(err => {
      console.log("error fetching and parsing data");
    })
  }

  render() {
    console.log(this.state.available);
    return (
        <div id="browse-page">
          <div id="browse-left">

          </div>
          <div className="right-sidebar">

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
}

module.exports = {
  Browse: Browse
}

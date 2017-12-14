const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../header').Header;

const s = require('../retrieve');
const Available = s.Available;
const Monitored = s.Monitored;
const Search = s.Search;
// load dangerouslySetInnerHTML before bundle js

// set conditional for map function, necessary?
// switch icons entirely?

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
      <div id="react-main">
        <Header loggedIn={this.state.loggedIn}/>
        <div id="browse-page">
          <div id="browse-left">
            <Search />
            <Available available = {this.state.available}/>
          </div>
          <div className="right-sidebar">
            <Monitored monitored = {this.state.monitored}/>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: 'window.PROPS=' + JSON.stringify(this.props)
        }} />
      </div>
    )
  }
}

module.exports = {
  Browse: Browse
}

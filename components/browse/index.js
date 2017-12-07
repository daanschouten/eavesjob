const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../header').Header;
const s = require('../retrieve');
const Available = s.Available;
const Monitored = s.Monitored;

// load dangerouslySetInnerHTML before bundle js

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      available: this.props.available
    };
  }

  render() {
    return (
      <div id="react-main">
        <Header loggedIn={this.state.loggedIn}/>
        <p> {this.state.available} </p>
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

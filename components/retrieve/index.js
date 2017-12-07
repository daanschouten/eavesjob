const React = require('react');
const PropTypes = require('prop-types');

class Monitored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monitored: this.props.monitored
    };
  }
  render () {
    return(
      <div>
        <p> </p>
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
  render () {
    return (
      <div>
        <p> </p>
      </div>
    )
  }
}

Available.propTypes = {
  available: PropTypes.array.isRequired
};

module.exports = {
  Monitored: Monitored,
  Available: Available
}

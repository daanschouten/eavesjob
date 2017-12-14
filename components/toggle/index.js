const React = require('react');
const PropTypes = require('prop-types');

// set checked value of checkbox and attach onchange handler or sth

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return(
      <label className="switch" role="switch">
        <input className="switch__toggle" type="checkbox" />
        <span className="switch__label"></span>
      </label>
    )
  }
}

module.exports = {
  Toggle: Toggle
}

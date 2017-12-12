const React = require('react');
const PropTypes = require('prop-types');

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return(
      <label class="switch" role="switch">
        <input class="switch__toggle" type="checkbox" unchecked />
        <span class="switch__label"></span>
      </label>
    )
  }
}

module.exports = {
  Toggle: Toggle
}

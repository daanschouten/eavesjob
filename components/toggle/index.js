const React = require('react');
const PropTypes = require('prop-types');

// set checked value of checkbox and attach onchange handler or sth

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monitored: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({monitored: this.state.monitored ? false : true});
    console.log(event.target.value);
  };
  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return(
      <label className="switch" role="switch">
        <input className="switch__toggle" type="checkbox" checked={this.state.monitored} onChange={this.handleChange}/>
        <span className="switch__label"></span>
      </label>
    )
  }
}

module.exports = {
  Toggle: Toggle
}

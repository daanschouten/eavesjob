const React = require('react');
const PropTypes = require('prop-types');

// set checked value of checkbox and attach onchange handler or sth

function Toggle(props) {
  function handleChange() {
    props.onToggle()
  }
  return(
    <label className="switch" role="switch">
      <input className="switch__toggle" type="checkbox" checked={props.monitored} onChange={handleChange}/>
      <span className="switch__label"></span>
    </label>
  )
}

module.exports = {
  Toggle: Toggle
}

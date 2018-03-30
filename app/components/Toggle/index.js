import React from 'react';
import PropTypes from 'prop-types';

// set checked value of checkbox and attach onchange handler or sth

export default function Toggle(props) {
  function handleChange() {
    props.onToggle()
  }
  return (
    <label className="switch" role="switch">
      <input className="switch__toggle" type="checkbox" checked={props.monitored} onChange={handleChange}/>
      <span className="switch__label"></span>
    </label>
  )
}

Toggle.propTypes = {
  monitored: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const C = require('../../../components/index.jsx');

let Login = C.Login;
let RegisterHome = C.RegisterHome;
let Register = C.Register;
let Browse = C.Browse;

var props = window.PROPS;

ReactDOM.hydrate(
  React.createElement(Browse, props),
  document.getElementById('app')
);

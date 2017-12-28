import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const C = require('../../../components/index.jsx');

let Login = C.Login;
let RegisterHome = C.RegisterHome;
let Register = C.Register;
let Browse = C.Browse;
let Home = C.Home;
let App = C.App;

ReactDOM.hydrate((
  <Router>
      <App data={window.__PRELOADED_STATE__}/>
  </Router>),
  document.getElementById('root')
)

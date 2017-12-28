const React = require('react');
const PropTypes = require('prop-types');

const A = require('./auth');
const Login = A.Login;

const H = require('./home');
const Home = H.Home;
const RegisterHome = H.RegisterHome;

const Register = require('./register').Register;

const Browse = require('./browse').Browse;

const Toggle = require('./toggle').Toggle;
const { Header } = require('./header');

import App from './App';

module.exports = {
  Header: Header,
  App: App,
  Browse: Browse,
  Register: Register,
  RegisterHome: RegisterHome,
  Login: Login,
  Home: Home
};

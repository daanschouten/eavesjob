const React = require('react');
const PropTypes = require('prop-types');

const A = require('./auth');
const Login = A.Login;

const H = require('./home');
const Home = H.Home;
const RegisterHome = H.RegisterHome;

const Register = require('./register').Register;

const Browse = require('./browse').Browse;

module.exports = {
  Browse: Browse,
  Register: Register,
  RegisterHome: RegisterHome,
  Login: Login,
  Home: Home
};

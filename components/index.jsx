const React = require('react');
const PropTypes = require('prop-types');

const A = require('./auth');
const Login = A.Login;

const H = require('./home');
const Home = H.Home;
const RegisterHome = H.RegisterHome;

module.exports = {
  RegisterHome: RegisterHome,
  Login: Login,
  Home: Home
};

// let Application = function(props) {
//   return (<div className="application">
//     <Header title={props.title}/>
//     <div className="players">
//       <div className="player">
//         <div className="player-name"></div>
//         <div className="player-score"></div>
//       </div>
//     </div>
//   </div>);
// }
//
// Application.propTypes = {
//   title: PropTypes.string
// };
//
// Application.defaultProps = {
//   title: "Scoreboard"
// }
//
// let Single = function(props) {
//   return (<div className="single-website">
//     <div className="single-logo">
//       <p>
//         {props.extension}
//       </p>
//     </div>
//     <div className="single-name">
//       <p>
//         {props.name}
//       </p>
//     </div>
//     <div className="single-date">
//       <p>
//         {props.date}
//       </p>
//     </div>
//     <div className="single-monitor"></div>
//   </div>);
// }
//
// Single.propTypes = {
//   extension: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired
// };

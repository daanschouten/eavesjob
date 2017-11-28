// const express = require('express');
// const react = require('react');
// const reactDOM = require('react-dom');
// const ReactDOMServer = require('react-dom/server');
//
// let renderProps = {
//   extension: 'uk',
//   name: 'europol',
//   date: 'metoo',
//   id: '112312'
// };
//
// let createSingle = function() {
//   let str = ReactDOMServer.renderToString(<Single {...renderProps}/>);
//   return str;
// }
//
// let Single = function(props) {
//   return (
//     <div className= "single-website">
//       <div className= "single-logo">
//         <p> {props.extension} </p>
//       </div>
//       <div className= "single-name">
//         <p> {props.name} </p>
//       </div>
//       <div className= "single-date">
//         <p> {props.date} </p>
//       </div>
//       <div className= "single-monitor">
//       </div>
//     </div>
//   );
// }
//
// Single.propTypes = {
//   extension: window.PropTypes.string.isRequired,
//   name: window.PropTypes.string.isRequired,
//   date: window.PropTypes.string.isRequired,
//   id: window.PropTypes.string.isRequired
// };
//
// module.exports = {
//
// }

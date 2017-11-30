import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let Header = function(props) {
  return(
    <div className="header">
      <h1> {props.title} </h1>
    </div>
  )
}

let Application = function(props) {
  return (
    <div className="application">
      <Header title= {props.title}/>
      <div className="players">
        <div className="player">
          <div className="player-name">
          </div>
          <div className="player-score">
          </div>
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string,
};

Application.defaultProps = {
  title: "Scoreboard"
}

ReactDOM.render(<Application/>, document.getElementById('container'));

let renderProps = {
  extension: 'uk',
  name: 'europol',
  date: 'metoo',
  id: '112312'
};
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

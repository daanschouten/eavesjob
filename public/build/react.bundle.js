webpackJsonp([1],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = __webpack_require__(41);

var MyComponent = components.MyComponent;

_reactDom2.default.hydrate(_react2.default.createElement(MyComponent, { title: 'John' }), document.getElementById("my-div"));

// let Header = function(props) {
//   return(
//     <div className="header">
//       <h1> {props.title} </h1>
//     </div>
//   );
// }
//
// let Application = function(props) {
//   return (
//     <div className="application">
//       <Header title= {props.title}/>
//       <div className="players">
//         <div className="player">
//           <div className="player-name">
//           </div>
//           <div className="player-score">
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// Application.propTypes = {
//   title: PropTypes.string,
// };
//
// Application.defaultProps = {
//   title: "Scoreboard"
// }
//
// ReactDOM.render(<Application/>, document.getElementById('container'));
//
// let renderProps = {
//   extension: 'uk',
//   name: 'europol',
//   date: 'metoo',
//   id: '112312'
// };
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

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(2);
var PropTypes = __webpack_require__(9);

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).apply(this, arguments));
  }

  _createClass(MyComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
          'h1',
          null,
          ' ',
          this.props.title,
          ' '
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

var Head = function Head(props) {
  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement(
      'h1',
      null,
      ' ',
      props.title,
      ' '
    )
  );
};

Head.defaultProps = {
  title: "EavesJob"
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement(
      'h1',
      null,
      ' ',
      props.title,
      ' '
    )
  );
};

Header.defaultProps = {
  title: "Header"
};

var Application = function Application(props) {
  return React.createElement(
    'div',
    { className: 'application' },
    React.createElement(Header, { title: props.title }),
    React.createElement(
      'div',
      { className: 'players' },
      React.createElement(
        'div',
        { className: 'player' },
        React.createElement('div', { className: 'player-name' }),
        React.createElement('div', { className: 'player-score' })
      )
    )
  );
};

Application.propTypes = {
  title: PropTypes.string
};

Application.defaultProps = {
  title: "Scoreboard"
};

var Single = function Single(props) {
  return React.createElement(
    'div',
    { className: 'single-website' },
    React.createElement(
      'div',
      { className: 'single-logo' },
      React.createElement(
        'p',
        null,
        ' ',
        props.extension,
        ' '
      )
    ),
    React.createElement(
      'div',
      { className: 'single-name' },
      React.createElement(
        'p',
        null,
        ' ',
        props.name,
        ' '
      )
    ),
    React.createElement(
      'div',
      { className: 'single-date' },
      React.createElement(
        'p',
        null,
        ' ',
        props.date,
        ' '
      )
    ),
    React.createElement('div', { className: 'single-monitor' })
  );
};

Single.propTypes = {
  extension: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

module.exports = {
  MyComponent: MyComponent,
  Application: Application,
  Head: Head,
  Header: Header,
  Single: Single
};

/***/ })

},[28]);
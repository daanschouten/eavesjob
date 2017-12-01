webpackJsonp([1],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    _react2.default.createElement(
      'h1',
      null,
      ' ',
      props.title,
      ' '
    )
  );
};

var Application = function Application(props) {
  return _react2.default.createElement(
    'div',
    { className: 'application' },
    _react2.default.createElement(Header, { title: props.title }),
    _react2.default.createElement(
      'div',
      { className: 'players' },
      _react2.default.createElement(
        'div',
        { className: 'player' },
        _react2.default.createElement('div', { className: 'player-name' }),
        _react2.default.createElement('div', { className: 'player-score' })
      )
    )
  );
};

Application.propTypes = {
  title: _propTypes2.default.string
};

Application.defaultProps = {
  title: "Scoreboard"
};

_reactDom2.default.render(_react2.default.createElement(Application, null), document.getElementById('container'));

var renderProps = {
  extension: 'uk',
  name: 'europol',
  date: 'metoo',
  id: '112312'
};

var Single = function Single(props) {
  return _react2.default.createElement(
    'div',
    { className: 'single-website' },
    _react2.default.createElement(
      'div',
      { className: 'single-logo' },
      _react2.default.createElement(
        'p',
        null,
        ' ',
        props.extension,
        ' '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'single-name' },
      _react2.default.createElement(
        'p',
        null,
        ' ',
        props.name,
        ' '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'single-date' },
      _react2.default.createElement(
        'p',
        null,
        ' ',
        props.date,
        ' '
      )
    ),
    _react2.default.createElement('div', { className: 'single-monitor' })
  );
};
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

/***/ })

},[28]);
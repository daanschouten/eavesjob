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

// ReactDOM.hydrate(<MyComponent title="John"/>, document.getElementById("my-div"));

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(2);
var PropTypes = __webpack_require__(9);

var MenuLoggedIn = function (_React$Component) {
  _inherits(MenuLoggedIn, _React$Component);

  function MenuLoggedIn() {
    _classCallCheck(this, MenuLoggedIn);

    return _possibleConstructorReturn(this, (MenuLoggedIn.__proto__ || Object.getPrototypeOf(MenuLoggedIn)).apply(this, arguments));
  }

  _createClass(MenuLoggedIn, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'menu' },
        React.createElement(
          'a',
          { href: '/contact' },
          'Contact'
        ),
        React.createElement(
          'a',
          { href: '/profile' },
          'My Profile'
        )
      );
    }
  }]);

  return MenuLoggedIn;
}(React.Component);

var MenuNotLoggedIn = function (_React$Component2) {
  _inherits(MenuNotLoggedIn, _React$Component2);

  function MenuNotLoggedIn() {
    _classCallCheck(this, MenuNotLoggedIn);

    return _possibleConstructorReturn(this, (MenuNotLoggedIn.__proto__ || Object.getPrototypeOf(MenuNotLoggedIn)).apply(this, arguments));
  }

  _createClass(MenuNotLoggedIn, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'menu' },
        React.createElement(
          'a',
          { href: '/contact' },
          'Contact'
        ),
        React.createElement(
          'a',
          { id: 'header-sign-up', href: '/register' },
          'Sign Up'
        ),
        React.createElement(
          'a',
          { href: '/login' },
          'Login'
        )
      );
    }
  }]);

  return MenuNotLoggedIn;
}(React.Component);

var Menu = function Menu(props) {
  var loggedIn = props.loggedIn;
  if (loggedIn) {
    return React.createElement(MenuLoggedIn, null);
  }
  return React.createElement(MenuNotLoggedIn, null);
};

var Header = function (_React$Component3) {
  _inherits(Header, _React$Component3);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'header',
        null,
        React.createElement(
          'div',
          { id: 'logo' },
          React.createElement(
            'a',
            { href: '/' },
            'Home'
          ),
          React.createElement(
            'a',
            { href: '/browse' },
            'Browse'
          ),
          React.createElement(
            'a',
            { href: '/support' },
            'Support'
          )
        ),
        React.createElement(Menu, { loggedIn: this.props.loggedIn })
      );
    }
  }]);

  return Header;
}(React.Component);

var Register = function (_React$Component4) {
  _inherits(Register, _React$Component4);

  function Register() {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
  }

  _createClass(Register, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'react-main' },
        React.createElement(Header, { loggedIn: this.props.loggedIn }),
        React.createElement(
          'div',
          { id: 'front' },
          React.createElement(
            'div',
            { id: 'front-top' },
            React.createElement(
              'div',
              { id: 'banner-left' },
              React.createElement(
                'h2',
                null,
                'We monitor career pages,',
                React.createElement('br', null),
                ' so you don\'t have to.'
              ),
              React.createElement(
                'p',
                { style: { maxWidth: '400px' } },
                'Checking for new vacancies can be a hassle. With EavesJob, you simply select the career pages of organisations you\'re interested in. Whenever career opportunities appear, we\'ll shoot you an email.'
              )
            ),
            React.createElement(
              'div',
              { id: 'register-right' },
              React.createElement(
                'div',
                { className: 'single-center', style: { marginTop: '0' } },
                React.createElement(
                  'div',
                  { className: 'form-title' },
                  React.createElement(
                    'h1',
                    null,
                    'Join us!  '
                  )
                ),
                React.createElement(
                  'form',
                  { method: 'POST', action: '/register', className: 'form-small' },
                  React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement('input', { type: 'text', placeholder: 'First Name', name: 'firstName', className: 'big-input half' }),
                    React.createElement('input', { type: 'text', placeholder: 'Last Name', name: 'lastName', className: 'big-input half' })
                  ),
                  React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement('input', { type: 'email', placeholder: 'Your Email Address', name: 'email', className: 'big-input' })
                  ),
                  React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement('input', { type: 'password', name: 'password', placeholder: 'Password', className: 'big-input half' }),
                    React.createElement('input', { type: 'password', name: 'confirmPassword', placeholder: 'Confirm Password', className: 'big-input half' })
                  ),
                  React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                      'button',
                      { type: 'submit', className: 'big-button' },
                      'Sign up'
                    )
                  )
                )
              )
            )
          ),
          React.createElement('div', { id: 'front-bottom' })
        )
      );
    }
  }]);

  return Register;
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

module.exports = (_module$exports = {
  Header: Header,
  Register: Register,
  Application: Application,
  Head: Head
}, _defineProperty(_module$exports, 'Header', Header), _defineProperty(_module$exports, 'Single', Single), _module$exports);

/***/ })

},[28]);
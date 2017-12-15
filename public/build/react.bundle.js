webpackJsonp([0],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);
var Header = __webpack_require__(8).Header;

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'react-main' }, React.createElement(Header, { loggedIn: this.state.loggedIn }), React.createElement('div', { id: 'wrapper-single' }, React.createElement('div', { className: 'single-center' }, React.createElement('div', { className: 'form-title' }, React.createElement('h1', null, 'Log in')), React.createElement('form', { method: 'POST', action: '/login', className: 'form-small' }, React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'text', id: 'email', placeholder: 'Your Email Address', name: 'email', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'password', id: 'password', placeholder: 'Your Password', name: 'password', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('button', { type: 'submit', className: 'big-button' }, 'Log in'))))));
    }
  }]);

  return Login;
}(React.Component);

Login.propTypes = {};

Login.defaultProps = {};

var RegisterForm = function (_React$Component2) {
  _inherits(RegisterForm, _React$Component2);

  function RegisterForm() {
    _classCallCheck(this, RegisterForm);

    return _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).apply(this, arguments));
  }

  _createClass(RegisterForm, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'single-center', style: { marginTop: this.props.marginTop } }, React.createElement('div', { className: 'form-title' }, React.createElement('h1', null, 'Join us!')), React.createElement('form', { method: 'POST', action: '/register', className: 'form-small' }, React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'text', placeholder: 'First Name', name: 'firstName', className: 'big-input half' }), React.createElement('input', { type: 'text', placeholder: 'Last Name', name: 'lastName', className: 'big-input half' })), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'email', placeholder: 'Your Email Address', name: 'email', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'password', name: 'password', placeholder: 'Password', className: 'big-input half' }), React.createElement('input', { type: 'password', name: 'confirmPassword', placeholder: 'Confirm Password', className: 'big-input half' })), React.createElement('div', { className: 'form-group' }, React.createElement('button', { type: 'submit', className: 'big-button' }, 'Sign up'))));
    }
  }]);

  return RegisterForm;
}(React.Component);

module.exports = {
  RegisterForm: RegisterForm,
  Login: Login
};

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);

// set checked value of checkbox and attach onchange handler or sth

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.state = {
      monitored: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Toggle, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ monitored: this.state.monitored ? false : true });
      console.log(event.target.value);
    }
  }, {
    key: 'render',

    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }

    value: function render() {
      return React.createElement('label', { className: 'switch', role: 'switch' }, React.createElement('input', { className: 'switch__toggle', type: 'checkbox', checked: this.state.monitored, onChange: this.handleChange }), React.createElement('span', { className: 'switch__label' }));
    }
  }]);

  return Toggle;
}(React.Component);

module.exports = {
  Toggle: Toggle
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = __webpack_require__(44);

var Login = C.Login;
var RegisterHome = C.RegisterHome;
var Register = C.Register;
var Browse = C.Browse;

var props = window.PROPS;

_reactDom2.default.hydrate(_react2.default.createElement(Browse, props), document.getElementById('app'));

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);

var A = __webpack_require__(11);
var Login = A.Login;

var H = __webpack_require__(45);
var Home = H.Home;
var RegisterHome = H.RegisterHome;

var Register = __webpack_require__(46).Register;

var Browse = __webpack_require__(47).Browse;

var Toggle = __webpack_require__(19).Toggle;

module.exports = {
  Browse: Browse,
  Register: Register,
  RegisterHome: RegisterHome,
  Login: Login,
  Home: Home
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);
var Header = __webpack_require__(8).Header;
var RegisterForm = __webpack_require__(11).RegisterForm;

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'react-main' }, React.createElement(Header, { loggedIn: this.props.loggedIn }), React.createElement('div', { id: 'front' }, React.createElement('div', { id: 'front-top' }, React.createElement('div', { id: 'banner' }, React.createElement('h1', null, 'We monitor career pages,', React.createElement('br', null), ' so you don\'t have to.'), React.createElement('p', null, 'Checking for new vacancies can be a hassle. ', React.createElement('br', null), ' With EavesJob, you simply select the career pages of organisations you\'re interested in. Whenever career opportunities appear, we\'ll shoot you an email.  '), React.createElement('div', { id: 'front-buttons' }, React.createElement('button', { onClick: { 'location.href': '/register' } }, 'Sign Up Free'), React.createElement('button', { onClick: { 'location.href': '/support' } }, 'Read More'))))));
    }
  }]);

  return Home;
}(React.Component);

var RegisterHome = function (_React$Component2) {
  _inherits(RegisterHome, _React$Component2);

  function RegisterHome(props) {
    _classCallCheck(this, RegisterHome);

    var _this2 = _possibleConstructorReturn(this, (RegisterHome.__proto__ || Object.getPrototypeOf(RegisterHome)).call(this, props));

    _this2.state = {
      loggedIn: _this2.props.loggedIn
    };
    return _this2;
  }

  _createClass(RegisterHome, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'react-main' }, React.createElement(Header, { loggedIn: this.state.loggedIn }), React.createElement('div', { id: 'front' }, React.createElement('div', { id: 'front-top' }, React.createElement('div', { id: 'banner-left' }, React.createElement('h2', null, 'We monitor career pages,', React.createElement('br', null), 'so you don\'t have to.'), React.createElement('p', { style: {
          maxWidth: '400px'
        } }, 'Checking for new vacancies can be a hassle. With EavesJob, you simply select the career pages of organisations you\'re interested in. Whenever career opportunities appear, we\'ll shoot you an email.')), React.createElement('div', { id: 'register-right' }, React.createElement(RegisterForm, { marginTop: 0 })))), React.createElement('div', { id: 'front-bottom' }));
    }
  }]);

  return RegisterHome;
}(React.Component);

var Browse = function (_React$Component3) {
  _inherits(Browse, _React$Component3);

  function Browse(props) {
    _classCallCheck(this, Browse);

    var _this3 = _possibleConstructorReturn(this, (Browse.__proto__ || Object.getPrototypeOf(Browse)).call(this, props));

    _this3.state = {
      loggedIn: _this3.props.loggedIn
    };
    return _this3;
  }

  _createClass(Browse, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'react-main' });
    }
  }]);

  return Browse;
}(React.Component);

module.exports = {
  Home: Home,
  RegisterHome: RegisterHome
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);
var Header = __webpack_require__(8).Header;
var RegisterForm = __webpack_require__(11).RegisterForm;

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.redirectMember = _this.redirectMember.bind(_this);
    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  _createClass(Register, [{
    key: 'redirectMember',
    value: function redirectMember() {
      location.href = '/login';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'react-main' }, React.createElement(Header, { loggedIn: this.props.loggedIn }), React.createElement('div', { id: 'wrapper-single' }, React.createElement(RegisterForm, { marginTop: 0 }), React.createElement('div', { className: 'single-center' }, React.createElement('div', { className: 'form-redirect' }, React.createElement('h2', null, 'Already a Member? '), React.createElement('button', { onClick: this.redirectMember, className: 'big-button' }, 'Login')))));
    }
  }]);

  return Register;
}(React.Component);

module.exports = {
  Register: Register
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);
var Header = __webpack_require__(8).Header;

var s = __webpack_require__(48);
var Available = s.Available;
var Monitored = s.Monitored;
var Search = s.Search;
// load dangerouslySetInnerHTML before bundle js

// set conditional for map function, necessary?
// switch icons entirely?

var Browse = function (_React$Component) {
  _inherits(Browse, _React$Component);

  function Browse(props) {
    _classCallCheck(this, Browse);

    var _this = _possibleConstructorReturn(this, (Browse.__proto__ || Object.getPrototypeOf(Browse)).call(this, props));

    _this.state = {
      loggedIn: true,
      available: _this.props.available,
      monitored: _this.props.monitored
    };
    return _this;
  }

  _createClass(Browse, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'react-main' }, React.createElement(Header, { loggedIn: this.state.loggedIn }), React.createElement('div', { id: 'browse-page' }, React.createElement('div', { id: 'browse-left' }, React.createElement(Search, null), React.createElement(Available, { available: this.state.available })), React.createElement('div', { className: 'right-sidebar' }, React.createElement(Monitored, { monitored: this.state.monitored }))), React.createElement('script', { dangerouslySetInnerHTML: {
          __html: 'window.PROPS=' + JSON.stringify(this.props)
        } }));
    }
  }]);

  return Browse;
}(React.Component);

module.exports = {
  Browse: Browse
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);

var _require = __webpack_require__(49),
    WebsiteForm = _require.WebsiteForm;

var _require2 = __webpack_require__(19),
    Toggle = _require2.Toggle;

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'search-website' }, React.createElement('h2', null, 'Browse Career Pages'), React.createElement('div', { className: 'search-div' }, React.createElement('form', { className: 'search-form' }, React.createElement('div', { className: 'search-bar' }, React.createElement('input', { id: 'search-input', type: 'text', placeholder: 'organisation / company name', name: 'name' }), React.createElement('button', { disabled: 'disabled' }, React.createElement('img', { src: '../img/search.svg' }))))));
    }
  }]);

  return Search;
}(React.Component);

var Single = function (_React$Component2) {
  _inherits(Single, _React$Component2);

  function Single(props) {
    _classCallCheck(this, Single);

    var _this2 = _possibleConstructorReturn(this, (Single.__proto__ || Object.getPrototypeOf(Single)).call(this, props));

    _this2.state = {
      website: _this2.props.website
    };
    return _this2;
  }

  _createClass(Single, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'single-website' }, React.createElement('div', { className: 'single-logo' }, React.createElement('p', null, ' ', this.state.website.links[0].extension, ' ')), React.createElement('div', { className: 'single-name' }, React.createElement('p', null, ' ', this.state.website.name, ' ')), React.createElement('div', { className: 'single-date' }, React.createElement('p', null, ' ', this.state.website.storedPage.date)), React.createElement('div', { className: 'single-monitor ' }, React.createElement(Toggle, null)));
    }
  }]);

  return Single;
}(React.Component);

var Monitored = function (_React$Component3) {
  _inherits(Monitored, _React$Component3);

  function Monitored(props) {
    _classCallCheck(this, Monitored);

    var _this3 = _possibleConstructorReturn(this, (Monitored.__proto__ || Object.getPrototypeOf(Monitored)).call(this, props));

    _this3.state = {
      monitored: _this3.props.monitored
    };
    return _this3;
  }

  _createClass(Monitored, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'monitored-websites' }, React.createElement('div', { className: 'right-sidebar-title' }, React.createElement('h2', null, 'subscribed career pages')), this.state.monitored.length > 0 ? this.state.monitored.map(function (website) {
        return React.createElement(Single, { website: website, key: website._id });
      }) : React.createElement('div', null, ' No results div here '));
    }
  }]);

  return Monitored;
}(React.Component);

Monitored.propTypes = {
  monitored: PropTypes.array.isRequired
};

var Available = function (_React$Component4) {
  _inherits(Available, _React$Component4);

  function Available(props) {
    _classCallCheck(this, Available);

    var _this4 = _possibleConstructorReturn(this, (Available.__proto__ || Object.getPrototypeOf(Available)).call(this, props));

    _this4.state = {
      available: _this4.props.available
    };
    return _this4;
  }

  _createClass(Available, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'website-list' }, React.createElement('div', { className: 'single-website' }, React.createElement('div', { className: 'single-logo' }), React.createElement('div', { className: 'single-name' }, React.createElement('p', null, ' name ')), React.createElement('div', { className: 'single-date' }, React.createElement('p', null, ' new career opportunity ')), React.createElement('div', { className: 'single-monitor' })), this.state.available.length > 0 ? this.state.available.map(function (website) {
        return React.createElement(Single, { website: website, key: website._id });
      }) : React.createElement(WebsiteForm, { action: '/requestWebsite' }));
    }
  }]);

  return Available;
}(React.Component);

Available.propTypes = {
  available: PropTypes.array.isRequired
};

module.exports = {
  Search: Search,
  Monitored: Monitored,
  Available: Available
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);

var WebsiteForm = function (_React$Component) {
  _inherits(WebsiteForm, _React$Component);

  function WebsiteForm(props) {
    _classCallCheck(this, WebsiteForm);

    var _this = _possibleConstructorReturn(this, (WebsiteForm.__proto__ || Object.getPrototypeOf(WebsiteForm)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(WebsiteForm, [{
    key: 'render',
    value: function render() {
      return (
        // <div className="form-title-vertical">
        //   <p>Fill in the name of a company, and one or more links to career pages of that company. Check the guidelines for submitting a company <a href="/support/guidelines">here</a>.</p>
        // </div>
        React.createElement('div', { id: 'wrapper-single' }, React.createElement('div', { className: 'single-center' }, React.createElement('form', { method: 'POST', action: this.props.action, className: 'form-small' }, React.createElement('div', { className: 'form-group' }, React.createElement('input', { style: { marginBottom: "20px" }, type: 'text', placeholder: 'Website Name', name: 'name', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'text', placeholder: 'Career Page URL (1)', name: 'url1', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'text', placeholder: 'Career Page URL (2) (optional)', name: 'url2', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('input', { type: 'text', placeholder: 'Career Page URL (3) (optional)', name: 'url3', className: 'big-input' })), React.createElement('div', { className: 'form-group' }, React.createElement('p', null, 'Once the the request comes through, we\'ll add the company to your subscribes automatically. Keep in mind this might take up to 24 hours.')), React.createElement('div', { className: 'form-group' }, React.createElement('button', { type: 'submit', className: 'big-button' }, 'Submit Website')))))
      );
    }
  }]);

  return WebsiteForm;
}(React.Component);

module.exports = {
  WebsiteForm: WebsiteForm
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(2);

var MenuLoggedIn = function (_React$Component) {
  _inherits(MenuLoggedIn, _React$Component);

  function MenuLoggedIn() {
    _classCallCheck(this, MenuLoggedIn);

    return _possibleConstructorReturn(this, (MenuLoggedIn.__proto__ || Object.getPrototypeOf(MenuLoggedIn)).apply(this, arguments));
  }

  _createClass(MenuLoggedIn, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { id: 'menu' }, React.createElement('a', { href: '/contact' }, 'Contact'), React.createElement('a', { href: '/profile' }, 'My Profile'));
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
      return React.createElement('div', { id: 'menu' }, React.createElement('a', { href: '/contact' }, 'Contact'), React.createElement('a', { id: 'header-sign-up', href: '/register' }, 'Sign Up'), React.createElement('a', { href: '/login' }, 'Login'));
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
      return React.createElement('header', null, React.createElement('div', { id: 'logo' }, React.createElement('a', { href: '/' }, 'Home'), React.createElement('a', { href: '/browse' }, 'Browse'), React.createElement('a', { href: '/support' }, 'Support')), React.createElement(Menu, { loggedIn: this.props.loggedIn }));
    }
  }]);

  return Header;
}(React.Component);

module.exports = {
  Header: Header
};

/***/ })

},[31]);
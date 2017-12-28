webpackJsonp([1],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(41);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(47)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./main.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./main.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "body,\ndiv,\nh1,\nh2,\nh3,\np,\nheader {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\ndiv,\nheader,\nform,\nbutton,\ninput {\n  display: flex;\n  box-sizing: border-box;\n}\nbody {\n  background-color: #f5f5f5;\n}\n@font-face {\n  font-family: RobotoCondensed;\n  src: url(" + __webpack_require__(44) + ");\n}\n@font-face {\n  font-family: RobotoLight;\n  src: url(" + __webpack_require__(45) + ");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url(" + __webpack_require__(46) + ");\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: RobotoCondensed;\n}\np {\n  font-family: RobotoLight;\n}\n#main {\n  width: 100%;\n  flex-flow: column;\n}\nheader {\n  width: 100%;\n  justify-content: space-between;\n  align-content: center;\n  padding: 0 40px;\n  border-bottom: 1px solid #619B8A;\n  font-family: RobotoLight;\n  height: 55px;\n}\nheader a {\n  margin: 0 15px;\n  font-size: 1.1em;\n  text-decoration: none;\n  color: black;\n}\nheader a#header-sign-up {\n  padding: 5px 20px;\n  margin: 0 20px;\n  border: 2px solid #619B8A;\n}\nheader #logo {\n  align-items: center;\n}\nheader #menu {\n  align-items: center;\n}\n#front {\n  flex-flow: column;\n  align-items: center;\n  margin-top: 20vh;\n}\n#front #front-top {\n  width: 100%;\n  justify-content: space-around;\n}\n#front #front-top #banner-left {\n  width: 50%;\n  margin-top: 5vh;\n}\n#front #front-top #banner {\n  width: 100%;\n}\n#front #front-top #banner,\n#front #front-top #banner-left {\n  align-items: center;\n  flex-flow: column;\n}\n#front #front-top #banner h1,\n#front #front-top #banner-left h1 {\n  font-size: 55px;\n  margin: 0;\n  font-family: RobotoCondensed;\n  text-align: center;\n}\n#front #front-top #banner h2,\n#front #front-top #banner-left h2 {\n  font-size: 50px;\n  margin: 0;\n  font-family: RobotoCondensed;\n  text-align: center;\n}\n#front #front-top #banner p,\n#front #front-top #banner-left p {\n  font-family: RobotoRegular;\n  font-size: 1.23em;\n  max-width: 350px;\n  margin-bottom: 20px;\n  text-align: justify;\n  line-height: 1.3;\n}\n#front #front-top #banner p:first-of-type,\n#front #front-top #banner-left p:first-of-type {\n  margin: 50px 0 20px 0;\n}\n#front #front-top #banner #front-buttons,\n#front #front-top #banner-left #front-buttons {\n  justify-content: space-between;\n  margin: 10px 0;\n}\n#front #front-top #banner #front-buttons button,\n#front #front-top #banner-left #front-buttons button {\n  font-family: RobotoRegular;\n  font-size: 1.1em;\n  padding: 10px 20px;\n  border: 0px;\n  background: #619B8A;\n  color: white;\n  margin: 0 20px;\n  border-radius: 5px;\n  outline: none;\n}\n#front #front-top #banner #front-buttons button:hover,\n#front #front-top #banner-left #front-buttons button:hover {\n  color: black;\n  cursor: pointer;\n}\n#front #front-bottom {\n  margin-top: 15vh;\n  width: 60%;\n  height: 500px;\n  border: 3px solid #619B8A;\n}\n#browse-page {\n  width: 100%;\n  padding: 40px 50px;\n  justify-content: space-between;\n}\n#browse-page #browse-left {\n  width: 70%;\n  flex-flow: column;\n}\n#browse-page #browse-left #search-website {\n  padding: 30px 5%;\n  background: #FFFFFF;\n  border: 1px solid #EAEAEA;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  justify-content: space-between;\n  align-items: center;\n  font-family: RobotoLight;\n}\n#browse-page #browse-left #search-website .search-div {\n  height: 40px;\n  width: 50%;\n}\n#browse-page #browse-left #search-website .search-div .search-form {\n  width: 100%;\n}\n#browse-page #browse-left #search-website .search-div .search-form .search-bar {\n  width: 100%;\n  justify-content: space-between;\n  background: #e6e6e6;\n}\n#browse-page #browse-left #search-website .search-div .search-form .search-bar input {\n  flex: 10 1 50%;\n  border: none;\n  padding: 0 10px;\n  background: none;\n  outline: none;\n  font-size: 1.1em;\n  font-family: RobotoLight;\n}\n#browse-page #browse-left #search-website .search-div .search-form .search-bar button {\n  border: none;\n  width: 60px;\n  justify-content: center;\n  padding: 0;\n  background: none;\n}\n#browse-page #browse-left #search-website .search-div .search-form .search-bar button :hover {\n  cursor: pointer;\n}\n#browse-page #browse-left #search-website .search-div .search-form .search-bar button img {\n  width: 35%;\n  height: auto;\n}\n#browse-page #browse-left #website-list {\n  padding: 30px 0;\n  flex-flow: column;\n  background: #FFFFFF;\n  align-items: center;\n  border: 1px solid #EAEAEA;\n  border-radius: 5px;\n}\n#browse-page #browse-left #website-list .single-website {\n  width: 100%;\n  border-bottom: 0.5px solid #EAEAEA;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 5%;\n  font-size: 1.1em;\n}\n#browse-page #browse-left #website-list .single-website .single-logo {\n  width: 10%;\n  justify-content: flex-start;\n}\n#browse-page #browse-left #website-list .single-website .single-monitor {\n  width: 10%;\n  justify-content: center;\n}\n#browse-page #browse-left #website-list .single-website .single-monitor img {\n  height: 20px;\n  width: auto;\n}\n#browse-page #browse-left #website-list .single-website .single-monitor img:hover {\n  cursor: pointer;\n}\n#browse-page #browse-left #website-list .single-website .single-date {\n  width: 25%;\n  justify-content: flex-end;\n}\n#browse-page #browse-left #website-list .single-website .single-name {\n  width: 55%;\n}\n#browse-page #browse-left #website-list .single-website:nth-child(even) {\n  background: linear-gradient(to right, #e6e6e6, #FFFFFF);\n}\n#browse-page #browse-left #website-list .single-website:hover {\n  background: #619B8A;\n}\n#browse-page #browse-left #website-list .single-website:first-of-type:hover {\n  background: #FFFFFF;\n}\n#browse-page #browse-left #profile-premium {\n  padding: 30px 5%;\n  background: #FFFFFF;\n  border: 1px solid #EAEAEA;\n  border-radius: 5px;\n  margin: 30px 0;\n  justify-content: space-between;\n  align-items: center;\n  font-family: RobotoLight;\n}\n#browse-page #browse-left #no-results {\n  display: none;\n  padding: 30px 5%;\n  background: #FFFFFF;\n  border: 1px solid #EAEAEA;\n  border-radius: 5px;\n  flex-flow: column;\n  align-items: center;\n  font-family: RobotoLight;\n}\n#browse-page #browse-left #no-results #results-text {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin: 30px 0;\n}\n#browse-page #browse-left #no-results #results-text h2 {\n  min-width: 100px;\n  margin-right: 30px;\n}\n#browse-page #browse-left #no-results #results-text p {\n  font-size: 1.1em;\n}\n#browse-page #browse-left #no-results #results-text i {\n  color: #619B8A;\n}\n#browse-page #browse-left #no-results #request-website form {\n  flex-flow: column;\n}\n#browse-page .right-sidebar {\n  width: 25%;\n  flex-flow: column;\n}\n#browse-page .right-sidebar #monitored-websites,\n#browse-page .right-sidebar .request-website,\n#browse-page .right-sidebar #welcome-user {\n  background: #FFFFFF;\n  border: 1px solid #EAEAEA;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  flex-flow: column;\n}\n#browse-page .right-sidebar #monitored-websites .right-sidebar-title,\n#browse-page .right-sidebar .request-website .right-sidebar-title,\n#browse-page .right-sidebar #welcome-user .right-sidebar-title {\n  width: 100%;\n  padding: 30px 5%;\n  height: 100px;\n  align-items: center;\n  justify-content: space-between;\n}\n#browse-page .right-sidebar #monitored-websites .right-sidebar-title p,\n#browse-page .right-sidebar .request-website .right-sidebar-title p,\n#browse-page .right-sidebar #welcome-user .right-sidebar-title p {\n  font-size: 1.1em;\n}\n#browse-page .right-sidebar #monitored-websites .right-sidebar-title button,\n#browse-page .right-sidebar .request-website .right-sidebar-title button,\n#browse-page .right-sidebar #welcome-user .right-sidebar-title button {\n  font-family: RobotoRegular;\n  font-size: 1.1em;\n  padding: 10px 20px;\n  border: 0px;\n  background: #619B8A;\n  border-radius: 5px;\n  margin: 10px 0;\n  outline: none;\n}\n#browse-page .right-sidebar #monitored-websites .right-sidebar-title button:hover,\n#browse-page .right-sidebar .request-website .right-sidebar-title button:hover,\n#browse-page .right-sidebar #welcome-user .right-sidebar-title button:hover {\n  cursor: pointer;\n}\n#browse-page .right-sidebar #monitored-websites .single-website,\n#browse-page .right-sidebar .request-website .single-website,\n#browse-page .right-sidebar #welcome-user .single-website {\n  width: 100%;\n  border-bottom: 0.5px solid #EAEAEA;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 5%;\n  font-size: 1.1em;\n}\n#browse-page .right-sidebar #monitored-websites .single-website .single-logo,\n#browse-page .right-sidebar .request-website .single-website .single-logo,\n#browse-page .right-sidebar #welcome-user .single-website .single-logo {\n  display: none;\n}\n#browse-page .right-sidebar #monitored-websites .single-website .single-monitor,\n#browse-page .right-sidebar .request-website .single-website .single-monitor,\n#browse-page .right-sidebar #welcome-user .single-website .single-monitor {\n  width: 30%;\n  justify-content: flex-end;\n}\n#browse-page .right-sidebar #monitored-websites .single-website .single-monitor img,\n#browse-page .right-sidebar .request-website .single-website .single-monitor img,\n#browse-page .right-sidebar #welcome-user .single-website .single-monitor img {\n  height: 20px;\n  width: auto;\n}\n#browse-page .right-sidebar #monitored-websites .single-website .single-monitor img:hover,\n#browse-page .right-sidebar .request-website .single-website .single-monitor img:hover,\n#browse-page .right-sidebar #welcome-user .single-website .single-monitor img:hover {\n  cursor: pointer;\n}\n#browse-page .right-sidebar #monitored-websites .single-website .single-date,\n#browse-page .right-sidebar .request-website .single-website .single-date,\n#browse-page .right-sidebar #welcome-user .single-website .single-date {\n  display: none;\n}\n#browse-page .right-sidebar #monitored-websites .single-text,\n#browse-page .right-sidebar .request-website .single-text,\n#browse-page .right-sidebar #welcome-user .single-text {\n  width: 100%;\n  border-bottom: 0.5px solid #EAEAEA;\n  justify-content: space-between;\n  padding: 0 5% 12px 5%;\n  font-size: 1.1em;\n  justify-content: center;\n}\n#browse-page .right-sidebar #monitored-websites .single-text button,\n#browse-page .right-sidebar .request-website .single-text button,\n#browse-page .right-sidebar #welcome-user .single-text button {\n  font-family: RobotoRegular;\n  font-size: 1.1em;\n  padding: 10px 20px;\n  border: 0px;\n  background: #619B8A;\n  border-radius: 5px;\n  margin: 10px 0;\n  outline: none;\n}\n#browse-page .right-sidebar #monitored-websites .single-text button:hover,\n#browse-page .right-sidebar .request-website .single-text button:hover,\n#browse-page .right-sidebar #welcome-user .single-text button:hover {\n  cursor: pointer;\n}\n#browse-page .right-sidebar #monitored-websites .single-website:nth-child(even),\n#browse-page .right-sidebar .request-website .single-website:nth-child(even),\n#browse-page .right-sidebar #welcome-user .single-website:nth-child(even) {\n  background: linear-gradient(to right, #e6e6e6, #FFFFFF 90%);\n}\n#browse-page .right-sidebar #monitored-websites .single-website:hover,\n#browse-page .right-sidebar .request-website .single-website:hover,\n#browse-page .right-sidebar #welcome-user .single-website:hover {\n  background: #619B8A;\n}\n#browse-page .right-sidebar #monitored-websites .single-website:first-of-type:hover,\n#browse-page .right-sidebar .request-website .single-website:first-of-type:hover,\n#browse-page .right-sidebar #welcome-user .single-website:first-of-type:hover {\n  background: #FFFFFF;\n}\n#wrapper-single {\n  width: 100%;\n  padding: 40px;\n}\n#register-right {\n  width: 50%;\n}\n#wrapper-single,\n#register-right {\n  justify-content: center;\n  flex-flow: column;\n  align-items: center;\n}\n#wrapper-single .single-center,\n#register-right .single-center {\n  width: 500px;\n  flex-flow: column;\n  background: #FFFFFF;\n  align-items: center;\n  border: 1px solid #EAEAEA;\n  border-radius: 5px;\n  margin-top: 20px;\n}\n#wrapper-single .single-center .form-redirect,\n#register-right .single-center .form-redirect {\n  width: 80%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n}\n#wrapper-single .single-center .form-redirect button,\n#register-right .single-center .form-redirect button {\n  width: 48%;\n}\n#wrapper-single .single-center .form-title,\n#register-right .single-center .form-title {\n  width: 80%;\n  margin-top: 20px;\n  justify-content: flex-start;\n}\n#wrapper-single .single-center .form-title p,\n#register-right .single-center .form-title p {\n  font-size: 1.1em;\n}\n#wrapper-single .single-center .form-title-vertical,\n#register-right .single-center .form-title-vertical {\n  width: 80%;\n  margin: 20px 0;\n  justify-content: flex-start;\n  flex-flow: column;\n}\n#wrapper-single .single-center .form-title-vertical p,\n#register-right .single-center .form-title-vertical p {\n  margin-top: 10px;\n  font-size: 1.1em;\n}\n#wrapper-single .single-center .form-title-vertical a,\n#register-right .single-center .form-title-vertical a {\n  color: #619B8A;\n}\n#wrapper-single .single-center .form-small,\n#register-right .single-center .form-small {\n  flex-flow: column;\n  width: 80%;\n  padding: 10px 0;\n}\n#wrapper-single .single-center .form-small .form-group,\n#register-right .single-center .form-small .form-group {\n  justify-content: space-between;\n}\n#wrapper-single .single-center .form-small .form-group input,\n#register-right .single-center .form-small .form-group input {\n  width: 100%;\n}\n#wrapper-single .single-center .form-small .form-group input.half,\n#register-right .single-center .form-small .form-group input.half {\n  width: 48%;\n}\n#wrapper-single .single-center .form-small .form-group button,\n#register-right .single-center .form-small .form-group button,\n#wrapper-single .single-center .form-small .form-group p,\n#register-right .single-center .form-small .form-group p {\n  width: 100%;\n  margin: 15px 0;\n  font-size: 1.1em;\n}\n.big-input {\n  height: 45px;\n  padding: 10px;\n  margin-top: 15px;\n  font-size: 1em;\n  background: #e6e6e6;\n  border: 1px solid #e6e6e6;\n  outline: none;\n  border-radius: 5px;\n}\n.big-button {\n  height: 45px;\n  padding: 10px;\n  background: #e6e6e6;\n  outline: none;\n  border-radius: 5px;\n  background: #619B8A;\n  font-size: 1.1em;\n  justify-content: center;\n}\nbutton:hover,\nbutton:focus {\n  cursor: pointer;\n  color: white;\n}\ninput:focus,\ninput:hover {\n  border: 1px solid #619B8A;\n}\n.switch {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  width: 40px;\n  height: calc(20px);\n  border-radius: 60px;\n  background-color: #619B8A;\n}\n.switch .switch__toggle {\n  width: 0;\n  height: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.switch .switch__toggle:checked ~ .switch__label:before {\n  transform: scale(0);\n  opacity: .7;\n}\n.switch .switch__toggle:checked ~ .switch__label:after {\n  transform: translate3d(100%, -50%, 0);\n}\n.switch .switch__toggle:checked ~ .switch__label {\n  box-shadow: 0 0 0 1px white;\n}\n.switch .switch__label {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 60px;\n  box-shadow: 0 0 0 1px #619B8A;\n}\n.switch .switch__label:before,\n.switch .switch__label:after {\n  content: \"\";\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #f5f5f5;\n}\n.switch .switch__label:before {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: 60px;\n  transition: opacity 0.2s ease-out 0.1s, transform 0.2s ease-out 0.1s;\n  transform: scale(1);\n  opacity: 1;\n}\n.switch .switch__label:after {\n  top: 50%;\n  z-index: 3;\n  transition: transform 0.4s cubic-bezier(0.44, -0.12, 0.07, 1.15);\n  width: calc(20px);\n  height: calc(20px);\n  transform: translate3d(0, -50%, 0);\n  border-radius: 100%;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RobotoCondensed-Bold.ttf";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RobotoCondensed-Light.ttf";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/RobotoCondensed-Regular.ttf";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(48);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 48:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

},[40]);
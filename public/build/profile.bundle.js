/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function (e) {
    var subscribes = document.getElementById('website-list').getElementsByClassName('single-monitor');
    var singleBars = document.getElementsByClassName('single-website');

    var setBars = function setBars() {
        Array.prototype.map.call(singleBars, function (singleBar) {
            singleBar.addEventListener('mouseover', function (event) {
                var imgHover = singleBar.getElementsByTagName('img')[0];
                if (imgHover) {
                    if (imgHover.src.includes('remove.svg')) {
                        imgHover.src = imgHover.src.replace(/remove/, 'removeBlack');
                    } else if (imgHover.src.includes('plus.svg')) {
                        imgHover.src = imgHover.src.replace(/plus/, 'plusBlack');
                    }
                }
            });
        });

        Array.prototype.map.call(singleBars, function (singleBar) {
            singleBar.addEventListener('mouseout', function (event) {
                var imgHover = singleBar.getElementsByTagName('img')[0];
                if (imgHover) {
                    if (imgHover.src.includes('removeBlack')) {
                        imgHover.src = imgHover.src.replace(/removeBlack/, 'remove');
                    } else if (imgHover.src.includes('plusBlack')) {
                        imgHover.src = imgHover.src.replace(/plusBlack/, 'plus');
                    }
                }
            });
        });
    };

    var checkGotLeft = function checkGotLeft() {
        var subscribed = document.getElementsByClassName('single-website');
        var gotLeft = 6 - subscribed.length;
        if (gotLeft > 1) {
            if (gotLeft === 5) {
                gotLeft = "Browse through the career pages and start adding them to your list. When updates appear, we'll notify you!";
                // print out no career pages somewhere
            } else {
                gotLeft = "You've got " + gotLeft + " empty slots left. Click below to find additional career pages!";
            }
        } else if (gotLeft === 1) {
            gotLeft = "You've got 1 empty slot left. Click below to find an additional career page!";
        } else {
            gotLeft = "You've got no available slots left. Consider going premium to monitor all pages you desire";
        }
        var gotLeftText = document.getElementsByClassName('single-text')[0].getElementsByTagName('p')[0];
        gotLeftText.textContent = gotLeft;
    };

    var subscribeClick = function subscribeClick(website) {
        var parentID = this.parentNode.className.split(' ')[1];
        var message = "id=" + parentID;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText === "removed") {
                    removeSubscribed(parentID);
                }
            }
        };
        xhr.open('POST', '/subscribed', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(message);
    };

    var setSubscribes = function setSubscribes() {
        Array.prototype.map.call(subscribes, function (subscribed) {
            if (subscribed.getElementsByTagName('img')[0]) {
                subscribed.getElementsByTagName('img')[0].addEventListener('click', subscribeClick);
            }
        });
    };

    var removeSubscribed = function removeSubscribed(imgID) {
        var selectedDiv = document.getElementsByClassName(imgID)[0].parentNode;
        selectedDiv.parentNode.removeChild(selectedDiv);
        checkGotLeft();
    };

    checkGotLeft();
    setSubscribes();
    setBars();
});

/***/ })

/******/ });
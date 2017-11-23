const express = require('express');
const { minify } = require('html-minifier');
const sanitizeHtml = require('sanitize-html');
const mongo = require('mongodb');
const websiteList = require('./websites.json');
const prepareURL = require('./prepareURL.js');

/// To do :
// connect users to storedWebsites and requestedWebsites
// Make comparison more specific
// Less dependence on length quality

// update testing keywords based on new json structure

/// Check for faulty links

// notes
// robots will block entire website if one of the links is disallowed

let tick = 0;
let checkRobotsEvery = 10;
let runEvery = 100000;

const start = function() {
    // setInterval(function(){
    //   tick++;
    //   if (tick === checkRobotsEvery) {
    //     tick = 0;
    //     return prepareURL.start(true);
    //   }
    // return prepareURL.start(false);
    // }, 100000);
};

module.exports = {
  start: start
};

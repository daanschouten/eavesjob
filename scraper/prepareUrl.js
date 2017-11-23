const express = require('express');
const urlParse = require('url-parse');
const mongo = require('mongodb');
const scrape = require('./scrape.js');
const checkRobots = require('./checkRobots');
const Website = require('../models/website');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const retrieveURL = function(robots) {
    Website.find({}).exec(function(error, websites) {
        if (error) {
            let err = new Error('Something went wrong retrieving requested website!');
            err.status = 400;
            next(err);
        } else {
            websites.map(function(website) {
                if (website.robotsAllow !== true && robots === false) {
                    console.log("robots disallow");
                } else if (robots === true) {
                  checkRobots.start(website);
                  // doesn't matter which link is picked
                } else {
                  website.links.map(function(link) {
                    scrape.start(link, website._id);
                  });
                }
            });
        }
    });
}

module.exports = {
    start: retrieveURL
};

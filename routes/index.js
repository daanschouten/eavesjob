const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const User = require('../models/user');
const Website = require('../models/website');
const Keyword = require('../models/keyword');
const mid = require('../middleware');
const moment = require('moment');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const C = require('../components/index.jsx');
// const PropTypes = require('prop-types');
// const ReactDOM = require('react-dom');

const index = 'newLayout';

mongoose.Promise = global.Promise;
mongoose.createConnection("mongodb://127.0.0.1:27017/jupdate");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const getLoggedIn = function(user) {
  return (user) ? true : false;
}

router.get('/', (req, res, next) => {
  let Home = React.createFactory(C.Home);
  let loggedIn = getLoggedIn(req.session.userID);

  res.render(index, {
    react: ReactDOMServer.renderToString(Home({
      loggedIn: loggedIn
    }))
  })
  // return res.render('index', { title: "home"});
});

router.get('/althome', (req, res, next) => {
  let RegisterHome = React.createFactory(C.RegisterHome);
  let loggedIn = getLoggedIn(req.session.userID);

  res.render(index, {
    react: ReactDOMServer.renderToString(RegisterHome({
      loggedIn: loggedIn
    }))
  })
});

router.post('/search', mid.requiresLogin, function(req,res, next) {
  let query = req.body.query;

  User.findOne({
    _id: req.session.userID
  }).exec(function(error, requestedUser) {
    if (error) {
      let err = new Error('Something went wrong retrieving requested user!');
      err.status = 400;
      next(err);
  } else if (requestedUser) {
      retrieveRequestedWebsites(requestedUser.subscribedWebsites);
    }
  });

  const retrieveRequestedWebsites = function(monitoredSites) {
    let monitored = [];

    Website.find({
      "name" : new RegExp(query, "i")
    }).select({
      "name": 1,
      "storedPage.date": 1,
      "links": 1
    }).exec(function(error, websites) {
      if (error) {
        let err = new Error('Something went wrong retrieving requested website!');
        err.status = 400;
        next(err);
      } else {
        let currentDate = new Date();
        let positions = [];
        websites.map(function(website){
          if (website.storedPage.date) {
            website.storedPage.date = moment(website.storedPage.date, "YYYYMMDD").fromNow();
          } else {
            website.storedPage.date = "new arrival";
          }
          // think about pagination
          monitoredSites.map(function(monSite){
            if (monSite == website._id) {
              website.combo = "single-website " + website._id;
              monitored.push(website);
            }
          });
        });

        monitored.map(function(monitor){
          // use reduce function
          let position = websites.indexOf(monitor);
          websites.splice(position, 1);
        });
        return res.end(JSON.stringify(websites));
      }
    });
  }

});

router.get('/support', (req, res, next) => {
  return res.render('support');
});

router.get('/contact', (req, res, next) => {
  return res.render('contact');
});

router.get('/addKeywords', mid.requiresAdmin, (req,res,next) => {
  return res.render('addKeywords');
});

router.post('/addKeywords', mid.requiresAdmin, (req,res,next) => {
  if (req.body.name && req.body.category) {

    let keywordData = {
      name: req.body.name,
      category: req.body.category
    }

    Keyword.create(keywordData, function(error) {
      if (error) {
        return next(error);
      } else {
        return res.render('addKeywords', {title: "Add another keyword" });
      }
    });

  } else {
    let err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;

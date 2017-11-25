const express = require('express');
const router = express.Router();
const mid = require('../middleware');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Website = require('../models/website');
const User = require('../models/user');
const requestedWebsite = require('../models/requestedWebsite');
const dbOps = require('./dbOps');
const urlParse = require('url-parse');
const moment = require('moment');

router.get('/editWebsite', mid.requiresLogin, function(req, res, next) {
  return res.render('editWebsite');
})

router.get('/profile', mid.requiresLogin, function(req,res, next) {
  User.findById(req.session.userID).exec(function(error, user) {
    if (error) {
      return next(error);
    } else {
      // check users websites
      findMonitored(user);
    }
  });

  const findMonitored = function(user) {
    Website.find({
      '_id': {
        $in: user.subscribedWebsites
      }
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
        websites.map(function(website) {
          if (website.storedPage.date) {
            website.storedPage.date = moment(website.storedPage.date, "YYYYMMDD").fromNow();
          } else {
            website.storedPage.date = "new arrival";
          }
        })
      }
      return res.render('profile', {title: 'my profile', monitored: websites, name: user.firstName});

    });
  }
});

router.get('/browse', mid.requiresLogin, (req, res, next) => {
  User.findById(req.session.userID).exec(function(error, requestedUser) {
    if (error) {
      let err = new Error('Something went wrong retrieving requested user!');
      err.status = 400;
      next(err);
  } else if (requestedUser) {
      retrieveWebsites(requestedUser.subscribedWebsites);
    }
  });

  const retrieveWebsites = function(monitoredSites) {
    let monitored = [];
    Website.find({}).select({
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
              monitored.push(website);
            }
          });
        });

        monitored.map(function(monitor){
          // use reduce function
          let position = websites.indexOf(monitor);
          websites.splice(position, 1);
        });

        return res.render('storedWebsites', {
          title: "browse career pages",
          websites: websites,
          monitored: monitored
        });
      }
    });
  }

});

router.post('/subscribed', (req, res, next) => {
  console.log(req.body.id);
  let websiteID = req.body.id;
  res.writeHead(200, {"Content-Type": "application/json"});
  User.update({
       _id: req.session.userID
   }, {
       $pull: {
           subscribedWebsites: websiteID
       }
   }, function(err, updatedUser) {
       if (err) {
           throw err;
       } else {
         return res.end("removed");
       }
   });
})

router.post('/browse', (req,res,next) => {
  let websiteID = req.body.id;
  res.writeHead(200, {"Content-Type": "application/json"});
  User.findOne({
    _id: req.session.userID
  }).exec(function(error, requestedUser) {
    if (error) {
      let err = new Error('Something went wrong retrieving requested user!');
      err.status = 400;
      next(err);
    } else if (requestedUser) {
       if (requestedUser.subscribedWebsites.length > 1110) {
         // check whether paid user or not
         return res.end("maximum");
       } else {
         User.update({
             _id: req.session.userID
         }, {
             $push: {
                 subscribedWebsites: websiteID
             }
         }, function(err, updatedUser) {
             if (err) {
                 throw err;
             } else {
               return res.end("added");
             }
         });
       }
    }
  })
})

router.get('/addWebsites', mid.requiresAdmin, (req, res, next) => {
    requestedWebsite.findOne({}).exec(function(error, requestedWebsite){
      if (error) {
        let err = new Error('Something went wrong retrieving requested website!');
        err.status = 400;
        next(err);
      } else if (requestedWebsite) {
        return res.render('addWebsites', {title: 'Add a Website', websiteName: requestedWebsite.name, links: requestedWebsite.links });
      }
      return res.render('addWebsites', {title: 'Add a Website'});
    });
});

router.post('/addWebsites', mid.requiresAdmin, (req, res, next) => {
  if (req.body.name && req.body.url1) {
    let linkArray = dbOps.checkInputArray(req);
    let newLinkArray = [];
    let getExtension = function(url) {
      let i = url.length - 1;
      while (url[i] !==  ".") {
        i = i -1;
      }
      let extension = url.substring(i, url.length);
      return extension;
    }

    linkArray.map(function(link) {
      let fullUrl = urlParse(link);
      fullUrl.robots = fullUrl.origin + "/robots.txt";
      fullUrl.favicon = fullUrl.origin + "/favicon.ico";
      fullUrl.extension = getExtension(fullUrl.origin);
      newLinkArray.push(fullUrl);
    })

    let websiteData = {
      name: req.body.name,
      links: newLinkArray,
      robotsAllow: null,
      storedPage: {
        page: null,
        date: null
      },
      pageUpdates: []
    }

    Website.create(websiteData, function(error, user) {
      if (error) {
        return next(error);
      } else {
        requestedWebsite.remove({ name: req.body.name }, function(err) {
          if (!err) {
            return res.redirect('addWebsites');
          } else {
            let err = new Error('Something went wrong removing a requested website');
            err.status = 400;
            return next(err);
          }
        });
      }
    })
  } else {
    let err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

router.get('/requestWebsite', mid.requiresLogin, (req, res, next) => {
  return res.render('requestWebsite', {title: "Request a Website" });
});

router.post('/requestWebsite', mid.requiresLogin, (req, res, next) => {
  if (req.body.name && req.body.url1) {
    let linkArray = dbOps.checkInputArray(req);
    if (dbOps.checkArrayDuplicates(linkArray)) {
      let err = new Error('You seem to have entered at least one duplicate link');
      err.status = 400;
      return next(err);
    }

    let websiteData = {
      name: req.body.name,
      links: linkArray,
      robotsAllow: null
    }

    dbOps.checkRequested(websiteData.name, function(err, website) {
      if (err) {
        next(err);
      } else if (website) {
        let err = new Error('There was a duplication error');
        err.status = 401;
        next(err);
        console.log("entry has already been requested");
        // return res.render('requestWebsite', {title: website.name + website._id});
        // return res.render('requestWebsite', {title: "Request another website"});
      } else {
        dbOps.checkStored(websiteData.name, function(err, website) {
          if (err) {
            let err = new Error('There was a duplication error');
            err.status = 401;
            next(err);
            console.log("already in stored");
          } else if (website) {
            console.log("entry is already in db");
            return res.render('requestWebsite', {title: website.name + website._id});
          } else {
            requestedWebsite.create(websiteData, function(error) {
              if (error) {
                return next(error);
              } else {
                return res.render('requestWebsite', {title: "Request another Website" });
              }
            });
          }
        });
      }
    });

  } else {
    let err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

module.exports = router;

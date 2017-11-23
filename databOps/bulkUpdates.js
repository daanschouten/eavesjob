const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Website = require('../models/website');
const User = require('../models/user');
const requestedWebsite = require('../models/requestedWebsite');

/// makes major changes to DB
/// execute with care

const getExtension = function(url) {
  let i = url.length - 1;
  while (url[i] !==  ".") {
    i = i -1;
    if (i === 1) {
      return "null";
    }
  }
  let extension = url.substring(i, url.length);
  return extension;
}

const updateWebsites = function() {
    let monitored = [];
    Website.find({}).exec(function(error, websites) {
        if (error) {
            let err = new Error('Something went wrong retrieving requested website!');
            err.status = 400;
            next(err);
        } else {
            websites.map(function(website) {
                website.links.map(function(link) {
                  let extension = getExtension(link.origin);
                        Website.findOneAndUpdate({
                            _id: website._id,  "links.href": link.href
                        }, {
                            $set: {
                              'links.$.auth': ''
                            }
                        }, {
                            upsert: true,
                            'new': true
                        }).exec(function(err,updatedSomething) {
                          if (err) {
                            console.log(err);
                          } else {
                            console.log(updatedSomething);
                          }
                        });
                });
            });
        }
    });
}

const start = function() {
  console.log("this function does nothing out of care");
}

module.exports = {
  start: start
};

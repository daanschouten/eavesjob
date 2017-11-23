const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const Website = require('../models/website');

const updateRobots = function(allowed, website) {
    let name = website.name

    Website.update({
        name: name
    }, {
      $set: {
          "robotsAllow": allowed
      }
    }, function(err, updatedWebsite) {
        if (err) {
            console.log(err);
        } else {
            return console.log("successfully updated robots of " + name);
        }
    });
}

module.exports = {
    start: updateRobots
};

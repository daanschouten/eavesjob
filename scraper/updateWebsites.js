const express = require('express');
const mongo = require('mongodb');
const Website = require('../models/website');

const updateWebsites = function(websiteID, page, pageUpdates) {
    if (pageUpdates === true) {
        console.log("Pages are the same for " + websiteID);
    } else {
        console.log("Pages are not the same for " + websiteID);

        Website.update({
            _id: websiteID
        }, {
            $set: {
                storedPage: {
                  page: page,
                  date: new Date()
                }
            },
            $push: {
                pageUpdates: {
                  update: pageUpdates,
                  date: new Date()
                }
            }
        }, function(err, updatedWebsite) {
            if (err) {
                throw err;
            } else {
                return console.log("successfully updated " + websiteID);
            }
        });

    };
}

module.exports = {
    start: updateWebsites
};

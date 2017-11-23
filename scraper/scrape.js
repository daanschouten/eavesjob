const express = require('express');
const { FetchStream } = require("fetch");
const sanitizeHtml = require('sanitize-html');
const { minify } = require('html-minifier');
const mongo = require('mongodb');
const updateWebsites = require('./updateWebsites');
const analyseDifferences = require('./analyseDifferences');
const mongoose = require('mongoose');
const Website = require('../models/website');

const downloadHTML = function(link, websiteID) {
    try {
        let scrapeInfo = {};

        let fetch = new FetchStream(link.href);
        scrapeInfo.body = '';

        fetch.on("data", function(chunk) {
            scrapeInfo.body += chunk.toString();
        });

        fetch.on("error", (e) => {
            console.error("downloading page went wrong, internet connection or poor link?");
            return;
        });

        fetch.on("end", function() {
            processHTML(scrapeInfo, websiteID);
            return;
        });
    } catch (error) {
        throw error;
    }
};

const processHTML = function(scrapeInfo, websiteID) {
    // minify HTML, remove whitespaces etc

    scrapeInfo.body = sanitizeHtml(scrapeInfo.body, {
        allowedTags: [
            'body',
            'section',
            '<div>',
            'li',
            'p',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5'
        ],
        allowedAttributes: {},
        nonTextTags: [
            'style',
            'script',
            'textarea',
            'noscript',
            'header',
            'footer',
            'form'
        ]
    });

    scrapeInfo.body = minify(scrapeInfo.body, {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
    });

    // Connect to the db

    Website.findOne({ _id: websiteID }).exec(function(error, website) {
        if (error) {
            console.log(error);
        } else if (website) {
            if (website.storedPage.page) {
              console.log("Some saved page exists");
              let firstPage = website.storedPage.page;
              let secondPage = scrapeInfo.body;
              let pageUpdates = analyseDifferences.start(firstPage, secondPage);
              return updateWebsites.start(websiteID, secondPage, pageUpdates);
            } else {
              Website.update({
                  _id: websiteID
              }, {
                  $set: {
                    storedPage: {
                      page: scrapeInfo.body,
                      date: new Date()
                  }
                }
              }, function(err, updatedWebsite) {
                  if (err) {
                      throw err;
                  } else {
                      return console.log("successfully inserted " + website.name);
                  }
              }
            );
          }
        }
    });
}

module.exports = {
  start: downloadHTML
};

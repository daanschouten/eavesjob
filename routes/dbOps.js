const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Website = require('../models/website');
const requestedWebsite = require('../models/requestedWebsite');

const checkRequested = function(nameToCheck, callback) {
  requestedWebsite.findOne({ name: nameToCheck }).exec(function(error, website){
    if (error) {
      let err = new Error('Something went wrong checking requested website!');
      err.status = 400;
      callback(err);
    } else if (website) {
      callback(null, website);
    } else {
      callback(null, null);
    }
  });
};

const checkStored = function(nameToCheck, callback) {
  Website.findOne({ name: nameToCheck }).exec(function(error, website){
    if (error) {
      let err = new Error('Something went wrong checking requested website!');
      err.status = 400;
      callback(err);
    } else if (website) {
      callback(null, website);
    } else {
      callback(null, null);
    }
  });
};

const checkInputArray = function(req) {
  let linkArray = [req.body.url1];
  if (req.body.url2) {
    linkArray.push(req.body.url2);
  }
  if (req.body.url3) {
    linkArray.push(req.body.url3);
  }
  if (req.body.url4) {
    linkArray.push(req.body.url4);
  }
  if (req.body.url5) {
    linkArray.push(req.body.url5);
  }
  return linkArray;
}

const checkArrayDuplicates = function(someArray) {
  const count = someArray =>
  someArray.reduce((a, b) =>
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

  const duplicates = dict =>
      Object.keys(dict).filter((a) => dict[a] > 1)

  let allDuplicates = duplicates(count(someArray));
  return(allDuplicates.length > 0);
}

module.exports = {
  checkRequested: checkRequested,
  checkStored: checkStored,
  checkInputArray: checkInputArray,
  checkArrayDuplicates: checkArrayDuplicates
}

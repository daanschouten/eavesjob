const express = require('express');

const startFlattening = function(keywordList) {
  const flatten = function(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  // add all object-arrays together before reducing
  let keywordListArray = [];
  keywordListArray.push(
    keywordList.role.intern,
    keywordList.role.professional,
    keywordList.role.voluntary,
    keywordList.timeRelated.fulltime,
    keywordList.timeRelated.parttime,
    keywordList.generalIndicators
  );
  keywordListArray = flatten(keywordListArray);

  return keywordListArray;
};

// function to make a single array

module.exports = {
    start: startFlattening
};

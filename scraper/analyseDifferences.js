const express = require('express');
const sanitizeHtml = require('sanitize-html');
const keywordList = require('./keywords.json');
// replace with db
const prepareKeywords = require('./prepareKeywords.js');

let keywordListArray = prepareKeywords.start(keywordList);

const checkForUpdates = function(firstPage, secondPage) {
  /// pass keywordList and keywordListArray as arguments
    let storedDom = firstPage;
    let newDom = secondPage;
    let differencePoints = {};

    if (storedDom === newDom) {
      return true;
    }

    const removeTags = function(page) {
      let someHTML = page;
      someHTML = sanitizeHtml(someHTML, {
          allowedTags: [],
          allowedAttributes: {},
          nonTextTags: ['style', 'script', 'textarea', 'noscript', 'header', 'footer', 'form']
      });
      return someHTML;
    }

    const checkWords = function(someText, keywords) {

      const getWordCount = function(text) {
        return text.reduce(function(prev,next){
            prev[next] = (prev[next] + 1) || 1;
            return prev;
        },
        {});
      }

      let text = getWordCount(someText.toLowerCase().split(" "));
      let jobPredictions = {
        role: {
          isIntern: 0,
          isProfessional: 0,
          isVoluntary: 0
        },
        timeRelated: {
          isFulltime: 0,
          isParttime: 0
        },
        generalIndicators: {
          numberOfMatches: 0
        }
      };

      for (let property in text) {
        if (text.hasOwnProperty(property)) {

          if (keywordListArray.includes(property)) {
            if (keywordList.role.intern.includes(property)) {
              jobPredictions.role.isIntern = text[property];
            }
            if (keywordList.role.professional.includes(property)) {
              jobPredictions.role.isProfessional = text[property];
            }
            if (keywordList.role.voluntary.includes(property)) {
              jobPredictions.role.isVoluntary = text[property];
            }

            if (keywordList.timeRelated.fulltime.includes(property)) {
              jobPredictions.timeRelated.isFulltime = text[property];
            }
            if (keywordList.timeRelated.parttime.includes(property)) {
              jobPredictions.timeRelated.isParttime = text[property];
            }

            if (keywordList.generalIndicators.includes(property)) {
              jobPredictions.generalIndicators.numberOfMatches += text[property];
            }
          }
        }
      }
      return jobPredictions;
    }

    const likelinessOfRelevantUpdate = function(page) {

      // GET DIFFERENCES IN STATS BOTH NORMAL AND PERCENTUAL
      let relevanceOfUpdate = checkWords(page.newTextInUpdate, keywordList);
      let relevanceOfStored = checkWords(page.lostTextInStored, keywordList);
      let marginalRelevance = {
        role: {
          isIntern: relevanceOfUpdate.role.isIntern - relevanceOfStored.role.isIntern,
          isVoluntary: relevanceOfUpdate.role.isVoluntary - relevanceOfStored.role.isVoluntary,
          isProfessional: relevanceOfUpdate.role.isProfessional - relevanceOfStored.role.isProfessional
        },
        timeRelated: {
          isFulltime: relevanceOfUpdate.timeRelated.isFulltime - relevanceOfStored.timeRelated.isFulltime,
          isParttime: relevanceOfUpdate.timeRelated.isParttime - relevanceOfStored.timeRelated.isParttime
        },
        generalIndicators: {
          numberOfMatches: relevanceOfUpdate.generalIndicators.numberOfMatches - relevanceOfStored.generalIndicators.numberOfMatches
        }
      }

      let differencesStats = {
        generalIncrease: page.newInUpdate.length - page.lostInStored.length,
        textIncrease: page.newTextInUpdate.length - page.lostTextInStored.length,
        relativeTextIncrease: ((page.newTextInUpdate.length - page.lostTextInStored.length) / (page.lostTextInStored.length + 1)) * 100,
        marginalRelevance: marginalRelevance
      };

      page.pageDifferencesStats = differencesStats;
      return page;
    };

    const checkPointsOfDifference = function() {
        for (let i = 0; i < storedDom.length; i++) {
            if (storedDom[i] !== newDom[i]) {
                while (storedDom[i] != "<") {
                    i--;
                }
                differencePoints.firstPoint = i;
                break;
            }
        }

        if (storedDom.length <= newDom.length) {
            let lengthDifference = newDom.length - storedDom.length;
            for (let i = storedDom.length - 1; i > -1; i--) {
                if (storedDom[i] !== newDom[i + lengthDifference]) {
                    while (storedDom[i] != ">") {
                        i++;
                    }
                    differencePoints.lastPoint = i;
                    differencePoints.length = lengthDifference;
                    differencePoints.longest = "newDom";
                    return differencePoints;
                }
            }
        } else {
            let lengthDifference = storedDom.length - newDom.length;
            for (let i = newDom.length - 1; i > -1; i--) {
                if (storedDom[i + lengthDifference] !== newDom[i]) {
                    while (newDom[i] != ">") {
                        i++;
                    }
                    differencePoints.lastPoint = i;
                    differencePoints.length = lengthDifference;
                    differencePoints.longest = "storedDom";
                    return differencePoints;
                }
            }
        }

    };

    let differences = checkPointsOfDifference();
    let pageDifferences = {};
    let storedPageSL = storedDom.substring(differences.firstPoint, differences.lastPoint + 1);
    let storedPageDL = storedDom.substring(differences.firstPoint, differences.lastPoint + 1 + differences.length);
    let newPageSL = newDom.substring(differences.firstPoint, differences.lastPoint + 1);
    let newPageDL = newDom.substring(differences.firstPoint, differences.lastPoint + 1 + differences.length);

    if (differences.length === 0) {
        pageDifferences = {
            date: new Date(),
            lostInStored: storedPageSL,
            lostTextInStored: removeTags(storedPageSL),
            newInUpdate: newPageSL,
            newTextInUpdate: removeTags(newPageSL)
        };
    } else if (differences.length > 0) {
        if (differences.longest === "storedDom") {
            pageDifferences = {
                date: new Date(),
                lostInStored: storedPageDL,
                lostTextInStored: removeTags(storedPageDL),
                newInUpdate: newPageSL,
                newTextInUpdate: removeTags(newPageSL)
            };
        } else {
            pageDifferences = {
                date: new Date(),
                lostInStored: storedPageSL,
                lostTextInStored: removeTags(storedPageSL),
                newInUpdate: newPageDL,
                newTextInUpdate: removeTags(newPageDL)
            };
        }
    }
    // set something that tells whether update was relevant
    pageDifferences = likelinessOfRelevantUpdate(pageDifferences);
    return pageDifferences;
};

module.exports = {
  start: checkForUpdates
};

const express = require('express');
const { FetchStream } = require("fetch");
const updateRobots = require('./updateRobots');

const checkRobots = function(robotsInfo, website) {
  try {
    let robotsFile = robotsInfo.body.toLowerCase();

    const compareRobots = function(indexPath, firstPathname, pathname) {

      const checkAllowed = function(placeOf) {
        let i = placeOf;
        while (robotsFile[i] !== "a" ) {
          i--;
        }
        if (robotsFile[i-1] === "s") {
          console.log("link cannot be crawled");
          updateRobots.start(false, website);
        } else {
          console.log("link can be crawled");
          updateRobots.start(true, website);
        }
      }

      if (robotsFile.includes(firstPathname)) {
        let placeOf = robotsFile.indexOf(firstPathname);
        let robotsSlice = robotsFile.slice(placeOf, placeOf + indexPath);
        let j = 0;

        while (robotsFile[placeOf + indexPath +j] !== "\n") {
          robotsSlice += robotsFile[placeOf + indexPath +j];
          j++;
        }

        if (robotsSlice === pathname || robotsSlice === pathname + "/") {
          console.log("robots equals pathname");
          checkAllowed(placeOf);
        } else if (pathname.includes(robotsSlice)) {
          console.log("pathname includes robots");
          checkAllowed(placeOf);
        } else {
          updateRobots(true, website);
        }
      } else {
        updateRobots.start(true, website);
      }
    }

    if (robotsFile.includes("disallow")) {
      website.links.map(function(link){
        let pathname = link.pathname;
        let firstPathname;
        let indexPath;
        for (let i = 1; i < pathname.length + 1; i++) {
          if (pathname[i] === "/" || !pathname[i]) {
            firstPathname = pathname.slice(0, i);
            indexPath = i;
            compareRobots(indexPath, firstPathname, pathname);
            break;
          }
        }
      });
    } else {
      updateRobots.start(true, website);
    }
  } catch (e) {
    console.log(e);
  }
}

const downloadRobots = function(website) {
  try {
      let robotsInfo = {};
      // any link works
      let fetch = new FetchStream(website.links[0].robots);
      robotsInfo.body = '';

      fetch.on("data", function(chunk) {
          robotsInfo.body += chunk.toString();
      });

      fetch.on("error", (e) => {
          console.error("robots file could not be downloaded!");
          return;
      });

      fetch.on("end", function() {
          checkRobots(robotsInfo, website);
          return;
      });
  } catch (error) {
      console.log(error);
  }
}

module.exports = {
  start: downloadRobots
};

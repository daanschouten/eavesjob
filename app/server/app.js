import path from 'path';
import express from 'express';
import cors from 'cors';

require('dotenv').config()

import router from './router';
// use react router for all GET requests

const app = express();

/// check for environment before serving gzip
// otherwise development webpack doesnt work because npm prod:build gzip files are still served
const environment = process.env.ENVIRONMENT || "local";

if (environment === "live") {
  app.get('*.bundle.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/json');
    next();
  });
} else {
  console.log("environment is local; not serving gzip");
}

const assets = express.static(path.join(__dirname, '../'));

app.use(cors());
app.use(assets);

app.get('*', router);
// redirect all GET requests to REACT router imported above

export default app;

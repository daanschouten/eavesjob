import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './router';
// use react router for all GET requests

const app = express();

app.get('*.bundle.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

const assets = express.static(path.join(__dirname, '../'));

app.use(cors());
app.use(assets);

app.get('*', router);
// redirect all GET requests to REACT router imported above

export default app;

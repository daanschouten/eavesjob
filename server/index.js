const express = require('express');
const app = express();
const babel = require('babel-register')({
    presets: ['es2015', 'react']
});
const htmlparser = require('htmlparser2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const less = require('less');
const lessMiddleware = require('less-middleware');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const startScraping = require('../scraper/index.js');
const User = require('../models/user');
const dbUpdates = require('../databOps/bulkUpdates');

const { router } = require('./router');
// use react router for all GET requests

// startScraping.start();
// execute with care, major updates to DB

// dbUpdates.start();
// start scraper function

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/jupdate");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// start up mongo database

app.use(session({
  secret: 'EavesJob career updates',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));
//track users as they navigate through website, useful for tracing logged in or not etc.

app.use(function(req,res,next){
  res.locals.currentUser = req.session.userID;
  next();
})
// use data about session in response, allows for tracking

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// use this to properly channel AJAX requests

app.use(lessMiddleware(__dirname + '/public'));
// use for LESS conversion to CSS

app.use(express.static('public'));
// set public folder as root for public routes; access public files inside public from '/'

app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json({ }));
app.use(cookieParser());

app.set('view engine', 'pug');
// not necessary after complete conversion

app.get('*', router);
// redirect all GET requests to REACT router imported above

app.listen(3000, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.')
  }
});
// start server

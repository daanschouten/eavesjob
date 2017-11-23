const express = require('express');
const app = express();
const htmlparser = require("htmlparser2");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const less = require('less');
const lessMiddleware = require('less-middleware');
const startScraping = require('./scraper/index.js');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const User = require('./models/user');
const dbUpdates = require('./databOps/bulkUpdates');

startScraping.start();

// execute with care, major updates to DB
// dbUpdates.start();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/jupdate");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(session({
  secret: 'EavesJob career updates',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use(function(req,res,next){
  res.locals.currentUser = req.session.userID;
  next();
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json({ }));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const authRoutes = require('./routes/auth');
const websitesRoutes = require('./routes/websites');

app.use(mainRoutes);
app.use(authRoutes);
app.use(websitesRoutes);

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log(err);
  // res.redirect('back');
  res.render('error');
});

app.listen(3000, () => {
  console.log("The server has started");
});

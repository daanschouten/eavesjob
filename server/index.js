const express = require('express');
const app = express();
const babel = require('babel-register')({
    presets: ['es2015', 'react']
});
const cookieParser = require('cookie-parser');
const less = require('less');
const lessMiddleware = require('less-middleware');
const session = require('express-session');

const { router } = require('./router');
// use react router for all GET requests

// app.use(session({
//   secret: 'EavesJob career updates',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));
//track users as they navigate through website, useful for tracing logged in or not etc.
//
// app.use(function(req,res,next){
//   res.locals.currentUser = req.session.userID;
//   next();
// })
// use data about session in response, allows for tracking

app.use(lessMiddleware(__dirname + '/public'));
// use for LESS conversion to CSS

app.use(express.static('public'));
// set public folder as root for public routes; access public files inside public from '/'

app.use(cookieParser());

app.get('*', router);
// redirect all GET requests to REACT router imported above

app.listen(8080, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port 8080. Open up http://localhost:8080/ in your browser.')
  }
});
// start server

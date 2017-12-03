const express = require('express');
const router = express.Router();
const mid = require('../middleware');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const User = require('../models/user');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const C = require('../components/index.jsx');

router.get('/register', mid.loggedOut, (req, res, next) => {
  return res.render('register', { title: "Sign Up!"});
});

router.post('/register', (req, res, next) => {
  if (req.body.email && req.body.firstName && req.body.lastName && req.body.password && req.body.confirmPassword) {
    if (req.body.password.length < 6) {
      let err = new Error('Password must consist of more than 5 characters.');
      err.status = 400;
      return next(err);
    }
    if (req.body.password !== req.body.confirmPassword) {
      let err = new Error('Passwords must match.');
      err.status = 400;
      return next(err);
    }

    // check email validity

    let userData = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      subscribedWesbites: [],
      signup: new Date()
    }

    User.create(userData, function(error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userID = user._id;
        return res.redirect('/');
      }
    })

  } else {
    let err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

router.get('/login', mid.loggedOut, function(req,res,next) {
  let Login = React.createFactory(C.Login);

  return res.render('newLayout', {
    react: ReactDOMServer.renderToString(Login({

    }))
  })
  // return res.render('login', { title: 'Log In'});
})

router.post('/login', function(req,res,next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function(error, user) {
        if (error || !user) {
          let err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.userID = user._id;
          return res.redirect('/profile');
        }
    });
  } else {
    let err = new Error('Email and password are required');
    err.status = 401;
    return next(err);
  }
});

router.get('/logout', function(req,res,next){
  if (req.session) {
    req.session.destroy(function(err){
      if (err) {
        return next(err);
      } else {
        res.redirect('/');
      }
    })
  }
});

module.exports = router;

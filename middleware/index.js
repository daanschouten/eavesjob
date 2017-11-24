const loggedOut = function(req, res, next) {
  if(req.session && req.session.userID) {
    return res.redirect('/profile');
  }
  return next();
};

const requiresLogin = function(req, res, next) {
  if (req.session && req.session.userID) {
    return next();
  } else {
    return res.render('register', { title: "Please sign up before accessing this page"});
    // let err = new Error('You are not authorised to see this page');
    // err.status = 401;
    // return next(err);
  }
};

const requiresAdmin = function(req,res, next) {
  if (req.session && req.session.userID === "59fc348c25c74b0b8544d7c2") {
    return next();
  } else {
    return res.redirect('/');
    // let err = new Error('You are not authorised to see this page');
    // err.status = 401;
    // return next(err);
  }
}

module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
module.exports.requiresAdmin = requiresAdmin;

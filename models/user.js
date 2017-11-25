const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    subscribedWebsites: {
      type: Array,
      required: false
    },
    signup: {
      type: Date,
      required: true
    }
});

// hash password before saving
userSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email }).exec(function(error, user){
    if (error) {
      return callback(error);
    } else if (!user) {
      let err = new Error('User not found!');
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(error, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        callback();
      }
    });
  });
}

userSchema.pre('save', function(next) {
    let user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    let err = new Error('There was a duplicate key error');
    err.status = 401;
    next(err);
  } else {
    next(error);
  }
});

let User = mongoose.model('User', userSchema);
module.exports = User;

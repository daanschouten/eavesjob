const mongoose = require('mongoose');

let requestedWebsiteSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    links: { 
      type: Array,
      required: true,
      unique: true,
      trim: true
    },
    robotsAllow: {
    }
}, { collection: "requestedWebsites" });

let requestedWebsite = mongoose.model('requestedWebsite', requestedWebsiteSchema);

requestedWebsiteSchema.pre('save', function(next) {
    let website = this;
    next();
});

requestedWebsiteSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    let err = new Error('There was a duplication error');
    err.status = 401;
    next(err);
  } else {
    next(error);
  }
});

module.exports = requestedWebsite;

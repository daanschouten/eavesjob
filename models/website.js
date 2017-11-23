const mongoose = require('mongoose');

let websiteSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    links: {
      type: Array,
      required: true,
      trim: true
    },
    robotsAllow: {
    },
    storedPage: {

    },
    pageUpdates: {
      type: Array
    }
}, { collection: "storedWebsites" });

let Website = mongoose.model('Website', websiteSchema);

websiteSchema.pre('save', function(next) {
    let website = this;
    next();
});

websiteSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    let err = new Error('There was a duplication error');
    err.status = 401;
    next(err);
  } else {
    next(error);
  }
});

module.exports = Website;

const mongoose = require('mongoose');

let updateSchema = mongoose.Schema({
    scrapeInfo: {
        type: Object,
        unique: true,
        required: true,
        trim: true
    },
    storedPage: {
      type: Object,
      required: false,
      trim: true
    },
    pageDifferences: {
      type: Array,
      required: false,
      trim: true
    }
}, { collection: "websiteUpdates"});

let WebsiteUpdate = mongoose.model('WebsiteUpdate', updateSchema);

updateSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    let err = new Error('There was a duplication error');
    err.status = 401;
    next(err);
  } else {
    next(error);
  }
});

module.exports = WebsiteUpdate;

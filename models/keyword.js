const mongoose = require('mongoose');

let keywordSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    language: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    }
}, { collection: "keywords" });

let Keyword = mongoose.model('Keyword', keywordSchema);

keywordSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    let err = new Error('There was a duplication error');
    err.status = 401;
    next(err);
  } else {
    next(error);
  }
});

module.exports = Keyword;

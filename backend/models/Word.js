const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word_content: { type: String , required: true },
  word_length: { type: Number , default : 0 },
});

module.exports = mongoose.model('Word', WordSchema);
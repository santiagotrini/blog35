const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  image: String
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;

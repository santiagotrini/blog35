const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  url: String
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;

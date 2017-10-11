var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  count: Number
});

module.exports = mongoose.model('Song', SongSchema);
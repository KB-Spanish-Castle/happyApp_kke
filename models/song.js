var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  count: Number,
  spotifyId: String
});

module.exports = mongoose.model('Song', SongSchema);
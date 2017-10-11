
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var Song = require('./models/song.js');
var bodyParser = require('body-parser');
var SpotifyWebApi = require('spotify-web-api-node');
var fetch = require('node-fetch');

var clientId = 'a1ce7da5ff774b18bfb68d1505610cee',
  clientSecret = '082c8b5799e84e019ff97b47d9562c7e';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  });

app.use(express.static('public'));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/songs');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we have database songs connected');
});

app.get('/songs', function (req, res, next) {
  spotifyApi.searchTracks('Track:Love')
    .then(function (data) {
      processTracks(data.body.tracks.items, res);
    }, function (err) {
      next('Something went wrong! ' + err);
    });
});

function processTracks(tracks, res) {
  res.json(tracks);
}

app.listen(5000, function () {
  console.log("Listening on 5000");
});

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var SpotifyWebApi = require('spotify-web-api-node');

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

app.get('/songs', function (req, res, next) {
  spotifyApi.searchTracks('Track:Love')
    .then(function (data) {
      res.json(data.body.tracks.items);
    }, function (err) {
      next('Something went wrong! ' + err);
    });
});

app.listen(5000, function () {
  console.log("Listening on 5000");
});
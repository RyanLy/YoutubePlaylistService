'use strict';

var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var auth = require('../../auth/auth.service');
var google = require('googleapis');
var youtube = google.youtube('v3');
var passport = require('passport');

var CLIENT_ID = config.google.clientID;
var CLIENT_SECRET = config.google.clientSecret;
var REDIRECT_URL = config.google.callbackURL;

var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// Retrieve tokens via token exchange explained above or set them:
oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
});

youtube.channels.list({part:'id', mine:true, key: 'AIzaSyAI4t-HnrdL9ZO9dHrRC3I6nPSkKjsTzOg'})


youtube.playlists.list({part:'id, snippet', channelId: 'UCcYBrzz90E0ceZCw7j374SQ', key: 'AIzaSyAI4t-HnrdL9ZO9dHrRC3I6nPSkKjsTzOg'}, function(err, res){
  console.log(res);
})


var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  console.log(req.user);

  res.json(200,{});
};

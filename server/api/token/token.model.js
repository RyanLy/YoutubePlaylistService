'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TokenSchema = new Schema({
  userid: String,
  access_token: String,
  refresh_token: String
});

module.exports = mongoose.model('Token', TokenSchema);

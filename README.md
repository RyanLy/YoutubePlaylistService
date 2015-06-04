# YoutubePlaylistService

## Instructions to setting up environment:

1. Get Node.js, it should come with npm.
2. Get bower <code>npm install -g bower grunt-cli</code>
3. Get MongoDB, start the mongoDB server.
4. Go to this project's root directory and <code>npm install</code>, <code>bower install</code>.
5. Create a file named 'apiKeys.js' in /server/config/environment/ with the following, where GOOGLE_ID is set to your Client ID and GOOGLE_SECRET is set to your Client secret (see https://developers.google.com/youtube/registering_an_application).
  ```javascript
  var apiKeys = {
	  GOOGLE_ID: '',
	  GOOGLE_SECRET: ''
  }

  module.exports = apiKeys;
  ```
6. Run <code>grunt serve</code>.  It should start up the server and immediately open the app in your browser.

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (User, config, Token) {
  passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      Token.findOne({
        userid: profile.id
      }, function(err, token){
        if (!token) {
          token = new Token({
            userid: profile.id,
            access_token: accessToken,
            refresh_token: refreshToken
          });
          token.save(function(err) {
          });
        }
        else{
          token.access_token = accessToken;
          token.refresh_token = refreshToken;
          token.save(function(err) {
          });
        }
      });

      User.findOne({
        'google.id': profile.id
      }, function(err, user) {
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.username,
            provider: 'google',
            google: profile._json
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });



    }
  ));
};

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done)=> {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', //callback goes to app.get in auth routes
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleID: profile.googleID})
      .then((existingUser) => {
        if(existingUser){
          //already User in database
          done(null, existingUser);  // otta say this to complete google oauth
        }
        else{ //not existing, create a new user
          new User({  //create a user
            googleID: profile.id,
            name: profile.displayName,
            emails: profile.emails
          }).save()
          .then(user => done(null, user));
        }
      });
  })
);

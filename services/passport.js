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
  },
  async (accessToken, refreshToken, profile, done) => { //profile is json object with all of google information of the user that logs in
    const existingUser = await User.findOne({googleID: profile.googleID});
    if(existingUser){
      //already User in database
      return done(null, existingUser);  // otta say this to complete google oauth
    }
    //not existing, create a new user
    const user = await new User({  //create a user
      googleID: profile.id,
      name: profile.displayName,
      emails: profile.emails
    }).save()

    done(null, user);
  })
);

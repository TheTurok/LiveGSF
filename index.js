const express = require('express');  // express helps us create and server app!
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require ('./config/keys');
require('./models/User');  // require befoe passport or else error, no models
require('./models/Tracker');
require('./services/passport');  //connecting the files together

mongoose.connect(keys.mongoURI);  //connecting mongoose to MongoDB

const app = express();

app.use(bodyParser.json());
app.use(  //to have users logged in while and not change user id while iside of it
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());  // Done with authentication flow
app.use(passport.session());


require('./routes/authRoutes')(app); //passing in app into auth routes!
require('./routes/trackerRoutes')(app);


if (process.env.NODE_ENV === 'production'){ // code that reroutes all client(local:3000) to local 5000 server side if it's not there
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000
app.listen(PORT);

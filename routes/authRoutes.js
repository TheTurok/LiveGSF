const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  ); //get(request path, what to execute when the user goes on path)

  //after callback it goes to here and then passport authenticates google!
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();  //use this function to end cookie
    res.send(req.user);  //log out user should be empty
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);  //return user information
  });
};

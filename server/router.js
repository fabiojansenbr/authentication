const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false }); // don't use cookies in session because of jwt
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {

  });
  app.post('/signin', requireSignin, Auth.signin);
  app.post('/signup', Auth.signup);
}
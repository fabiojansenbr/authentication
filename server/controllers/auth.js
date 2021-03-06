const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  // Check if user with given email exists
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err); }

    // If user email exists return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If user email doesn't exists, create and save new user
    const user = new User({
      email,
      password
    });

    user.save((err) => {
      if (err) { return next(err); }

      // Respond to request that user was created
      res.json({ token: tokenForUser(user) });
    });
  });
}
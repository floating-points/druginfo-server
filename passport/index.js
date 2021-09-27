const passport = require('passport');
const User = require('../schemas/user');

module.exports = () => {
	passport.use(User.createStrategy());

	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());
};

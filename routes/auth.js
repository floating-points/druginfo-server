const express = require('express');
const User = require('../schemas/user');
const register = require('../passport/localStrategy');
const router = express.Router();

router.post('/register', register);

module.exports = router;
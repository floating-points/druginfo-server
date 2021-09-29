const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schemas/user');
const router = express.Router();

router.post('/register', async (req, res, next) => {
	const { username, email, password } = req.body;

	try {
		const exUser = await User.findOne({username});
		if (exUser) {
			return res.status(400).json({ errors: [{ msg: '유저가 존재합니다' }]});
		}
		const pwHash = await bcrypt.hash(password, 15);
		const user = await User.create({
			username,
			email,
			password: pwHash,
		});

		res.send('Success');
	} catch (error) {
		console.error('회원가입 에러', error)
		return res.redirect('/');
	}
});

module.exports = router;
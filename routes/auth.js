const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schemas/user');
const jwtAuth = require('../auth/auth');

router.post('/register', async (req, res, next) => {
	const { username, email, password } = req.body;

	try {
		const exUser = await User.findOne({username});
		if (exUser) {
			return res.status(400).json({ error: '유저가 존재합니다' });
		}
		const pwHash = await bcrypt.hash(password, 15);
		const user = await User.create({
			username,
			email,
			password: pwHash,
		});
		res.json({success: true});
	} catch (error) {
		console.error('회원가입 에러', error)
		return res.redirect('/');
	}
});

router.post('/login', async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({username});
		if (!user) {
			return res.status(400).json({ errors: [{ msg: '아이디가 존재하지 않습니다' }]});
		}

		const checkPw = await bcrypt.compare(password, user.password);
		if (!checkPw) {
			return res.status(400).json({ errors: [{ msg: '비밀번호가 틀립니다.' }]});
		}

		const token = jwt.sign({ userID: user.username}, process.env.JWTSECRET, {expiresIn: '1h'});
		return res.cookie('x_auth', token).status(200).json({ success: true, token: token});
	} catch(error){
		console.error('로그인 에러');
		return res.redirect('/');
	}
})

module.exports = router;
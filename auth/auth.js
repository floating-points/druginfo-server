const jwt = require('jsonwebtoken');

const jwtAuth =  (req, res, next) => {
		const token = req.cookies.x_auth;
		console.log(token);
		jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
			if (err) {
				return res.json({ error: '토큰이 잘못되었습니다.'})
			}
		});
		next();
}

module.exports = jwtAuth;
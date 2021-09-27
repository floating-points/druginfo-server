const User = require('../schemas/user');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
	const { id, email, password } = req.body;
	console.log(req.body);
	try {
		const pwHash = await bcrypt.hash(password, 15);

		const user = await User.create({
			id: id,
			email: email,
			password: pwHash,
		});
		console.log(user);
		res.status(201).json(user);
		//res.redirect('/');
		//next();
	} catch (error) {
		console.error('회원가입 에러', error)
		return res.redirect('/');
	}
}

module.exports = register;
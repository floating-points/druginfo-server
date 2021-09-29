const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: false,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		unique: false,
	},
})
//이부분 보기
//userSchema.plugin(passportLocalMongoose, {usernameField: 'username'});
module.exports = mongoose.model('User', userSchema);
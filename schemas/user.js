const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: false,
	},
	password: {
		type: String,
		required: true,
		unique: false,
	},
})
//이부분 보기
userSchema.plugin(passportLocalMongoose, { usernameField: 'id'});
module.exports = mongoose.model('User', userSchema);
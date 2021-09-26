const mongoose = require('mongoose');

const { Schema } = mongoose;

const drugSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	img: {
		type: String,
		required: true,
		unique: true,
	},
})

module.exports = mongoose.model('Drug', drugSchema);
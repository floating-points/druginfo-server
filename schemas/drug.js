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
	contraindication : {
		type: Array,
		required: false,
		unique: false,
	},
	effect : {
		type: Array,
		required: true,
		unique: false,
	},
	ingredient : {
		type: Array,
		required: true,
		unique: false,
	},
})

module.exports = mongoose.model('Drug', drugSchema);
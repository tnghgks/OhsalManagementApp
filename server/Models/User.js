const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name : {
		type: String
	},
	nickname: {
		type: String
	},
	rankPoint: {
		type: Number,
		default:0
	},
	discordID: {
		type: String,
		required: "this is required"
	},
	_215: {
		type: Number,
		default:0
	},
	_321: {
		type: Number,
		default:0
	},
	_615: {
		type: Number,
		default:0
	},
	_702: {
		type: Number,
		default:0
	},
	_714: {
		type: Number,
		default:0
	}
})

const model = mongoose.model("User", userSchema);

module.exports = model;
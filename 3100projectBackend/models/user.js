const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	user_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
		type: String,
		required: true
	},
	password: {type: String,
		required: true},
	role: String,
	email: {type: String,
		required: true},
	picture: String,
	bio: String
});

module.exports = User = mongoose.model('user', UserSchema);

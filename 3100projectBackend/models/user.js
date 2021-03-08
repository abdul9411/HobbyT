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
		required: true,
		unique:true
	},
	password: String,
	role: String,
	email: String,
	picture: String,
	bio: String
});

module.exports = User = mongoose.model('user', UserSchema);

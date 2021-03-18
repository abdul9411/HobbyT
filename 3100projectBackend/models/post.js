const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	post_id: {
    type: Number,
    required: true,
    unique: true
  },
	user_id: {
    type: Number,
    required: true,
    unique: true
  },
	community_id: Number,
	title: String,
	content: String,
	picture: String,
	likes: Number,
	date: Date
});

module.exports = Post = mongoose.model('post', PostSchema);

var express = require('express');
const router = express.Router();
const Comment =  require('../../models/comment');
const auth = require ('../../middleware/auth');

/**
 * @route   GET api/comment
 * @desc    show a list of comment info
 */

 router.get("/", auth, async (req, res)=> {
    try {
      const results = await Comment.find({});
      if(!results) throw Error('No comment exist');
      res.status(200).json(results);
    }
    catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  /**
   * @route   POST api/comment
   * @desc    perform comment creation
   */

router.post("/", auth, async (req, res)=> {
  var commentId = 1;
  var comment1 = await Comment.findOne({}).sort({comment_id: -1});
  if (comment1) {
    commentId = comment1.comment_id + 1;
  }
  const {post_id, user_id, comment} = req.body;
  if (!post_id || !user_id || !comment ) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  try {
    const newComment = new Comment({
      comment_id: commentId,
      post_id,
      user_id,
      comment
    });
    const savedComment = await newComment.save();
    if (!savedComment) throw Error('saving error');
    res.status(200).json({
      savedComment
    });
  }
  catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   PATCH api/comment
 * @desc    perform comment update
 */

router.patch("/", auth, async (req, res)=> {
  try {
    const {comment_id, post_id, user_id, comment} = req.body;
    if (!comment_id || !post_id || !user_id || !comment) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    Comment.update({comment_id}, {$set: {post_id, user_id, comment}}).exec(function(err, result){
      if (result.n == 0) return res.status(400).json({msg: "comment does not exist"});
      res.status(200).json(result);
    });
  }
  catch (e) {
    res.status(401).json({ error: e.message });
  }
});

/**
 * @route   DELETE api/comment
 * @desc    perform comment deletion
 */

router.delete("/", auth, async (req,res)=> {
  try {
    const {comment_id} = req.body;
    if (!comment_id) {
      return res.status(401).json({ msg: 'Please enter all fields' });
    }
    Comment.remove({comment_id}).exec(function(err, result){
      if (result.n == 0) return res.status(400).json({msg: "comment does not exist"});
      res.status(200).json(result);
    });
  }
  catch (e) {
    res.status(401).json({ error: e.message });
  }
});


module.exports = router;

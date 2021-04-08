var express = require('express');
const router = express.Router();
const Notification =  require('../../models/notification');
const auth = require ('../../middleware/auth');

/**
 * @route   GET api/notification
 * @desc    show a list of notification info
 */

 router.get("/", auth, async (req, res)=> {
    try {
      const results = await Notification.find({});
      if(!results) throw Error('No notification exist');
      res.status(200).json(results);
    }
    catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  /**
   * @route   POST api/notification
   * @desc    perform notification creation
   */

router.post("/", auth, async (req, res)=> {
  var notificationId = 1;
  var notification1 = await Notification.findOne({}).sort({notification_id: -1});
  if (notification1) {
    notificationId = notification1.notification_id + 1;
  }
  const {title, user_id, content} = req.body;
  if (!title || !user_id || !content ) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  try {
    const newNotification = new Notification({
      notification_id: notificationId,
      title,
      user_id,
      content
    });
    const savedNotification = await newNotification.save();
    if (!savedNotification) throw Error('saving error');
    res.status(200).json({
      savedNotification
    });
  }
  catch (e) {
    res.status(400).json({ msg: e.message });
  }
});


/**
 * @route   DELETE api/notification
 * @desc    perform notification deletion
 */

router.delete("/", auth, async (req,res)=> {
  try {
    const {notification_id} = req.body;
    if (!notification_id) {
      return res.status(401).json({ msg: 'Please enter all fields' });
    }
    Notification.remove({notification_id}).exec(function(err, result){
      if (result.n == 0) return res.status(400).json({msg: "notification does not exist"});
      res.status(200).json(result);
    });
  }
  catch (e) {
    res.status(401).json({ error: e.message });
  }
});


module.exports = router;

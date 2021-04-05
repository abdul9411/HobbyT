var express = require('express');
const router = express.Router();
const Message =  require('../../models/message');
const Conversation =  require('../../models/conversation');
const GlobalMessage =  require('../../models/globalmessage');
const auth = require ('../../middleware/auth');
const mongoose = require('mongoose');


/**
 * @route   GET api/global
 * @desc    show a list of globalmessage info
 */

router.get("/global", auth, async (req, res)=> {
  GlobalMessage.aggregate([
       {
           $lookup: {
               from: 'users',
               localField: 'from',
               foreignField: '_id',
               as: 'fromObj',
           },
       },
   ])
       .project({
           'fromObj.password': 0,
           'fromObj.__v': 0,
           'fromObj.date': 0,
       })
       .exec((err, messages) => {
           if (err) {
               console.log(err);
               res.setHeader('Content-Type', 'application/json');
               res.end(JSON.stringify({ message: 'Failure' }));
               res.sendStatus(400);
           } else {
               res.send(messages);
           }
       });
 });



  /**
   * @route   POST api/global
   * @desc    perform globalmessage creation
   */

router.post("/global", auth, async (req, res)=> {

  const {body} = req.body;
  if (!body ) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  var io = req.app.get('socketio');
  //console.log(io);
  io.emit('messages', req.body.body);

  try {
    const newGlobalMessage = new GlobalMessage({
      from: req.user.user_object_id,
      body
    });
    //console.log(req.user);
    const savedPost = await newGlobalMessage.save();
    if (!savedPost) throw Error('saving error');
    res.status(200).json({
      savedPost
    });
  }
  catch (e) {
    res.status(400).json({ msg: e.message });
  }
});


/**
 * @route   GET api/conversation
 * @desc    show a list of conversation info
 */

router.get("/conversation", auth, async (req, res)=> {
  let from = mongoose.Types.ObjectId(req.user.user_object_id);
    Conversation.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'recipients',
                foreignField: '_id',
                as: 'recipientObj',
            },
        },
    ])
        .match({ recipients: { $all: [{ $elemMatch: { $eq: from } }] } })
        .project({
            'recipientObj.password': 0,
            'recipientObj.__v': 0,
            'recipientObj.date': 0,
        })
        .exec((err, conversations) => {
            if (err) {
                console.log(err);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Failure' }));
                res.sendStatus(400);
            } else {
                res.status(200).send(conversations);
            }
        });
 });

 /**
  * @route   GET api/conversation
  * @desc    show particular conversation info
  */

 router.get('/conversation/query', auth, async(req, res) => {
     let user1 = mongoose.Types.ObjectId(req.user.user_object_id);
     let user2 = mongoose.Types.ObjectId(req.query.userId);
     Message.aggregate([
         {
             $lookup: {
                 from: 'users',
                 localField: 'to',
                 foreignField: '_id',
                 as: 'toObj',
             },
         },
         {
             $lookup: {
                 from: 'users',
                 localField: 'from',
                 foreignField: '_id',
                 as: 'fromObj',
             },
         },
     ])
         .match({
             $or: [
                 { $and: [{ to: user1 }, { from: user2 }] },
                 { $and: [{ to: user2 }, { from: user1 }] },
             ],
         })
         .project({
             'toObj.password': 0,
             'toObj.__v': 0,
             'toObj.date': 0,
             'fromObj.password': 0,
             'fromObj.__v': 0,
             'fromObj.date': 0,
         })
         .exec((err, messages) => {
             if (err) {
                 console.log(err);
                 res.setHeader('Content-Type', 'application/json');
                 res.end(JSON.stringify({ message: 'Failure' }));
                 res.sendStatus(400);
             } else {
                 res.status(200).send(messages);
             }
         });
 });

 /**
  * @route   POST api/
  * @desc    perform privatemessage creation
  */

 router.post("/", auth, async (req, res)=> {
   let from = mongoose.Types.ObjectId(req.user.user_object_id);
   let to = mongoose.Types.ObjectId(req.body.to);

   Conversation.findOneAndUpdate(
       {
           recipients: {
               $all: [
                   { $elemMatch: { $eq: from } },
                   { $elemMatch: { $eq: to } },
               ],
           },
       },
       {
           recipients: [req.user.user_object_id, req.body.to],
           lastMessage: req.body.body,
           date: Date.now(),
       },
       { upsert: true, new: true, setDefaultsOnInsert: true },
       function(err, conversation) {
           if (err) {
               console.log(err);
               res.setHeader('Content-Type', 'application/json');
               res.end(JSON.stringify({ message: 'Failure' }));
               res.sendStatus(500);
           } else {

                 const message = new Message({
                   conversation: conversation._id,
                   to: req.body.to,
                   from: req.user.user_object_id,
                   body: req.body.body,
                 });
                 var io = req.app.get('socketio');
                 //console.log(io);
                 io.emit('messages', req.body.body);

                 message.save(err => {
                     if (err) {
                         console.log(err);
                         res.setHeader('Content-Type', 'application/json');
                         res.end(JSON.stringify({ message: 'Failure' }));
                         res.sendStatus(400);
                     } else {
                         res.setHeader('Content-Type', 'application/json');
                         res.end(
                             JSON.stringify({
                                 message: 'Success',
                                 conversationId: conversation._id,
                             })
                         );
                     }
                 });

           }
       }
   );
 });


module.exports = router;

//import { Router } from 'express';
const express = require('express');
const router = express.Router();

const bcrypt =  require('bcryptjs');

const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require ('../../middleware/auth');
const User = require ('../../models/user');

const JWT_SECRET = config.get("jwtSecret");
//const router = Router();

/**
 * @route   POST api/auth/login/admin
 * @desc    perform admin login
 */

 router.get('/login/admin',async (req, res) => {
   try {
     const user = await User.findOne({user_id : 0}).select('-password')
     if (!user) throw Error('user dose not exist');
     const token = jwt.sign({ user_id: user.user_id , name : user.name}, JWT_SECRET, { expiresIn: 360000 });
     if (!token) throw Error('cannot sign token');
     res.status(200).json({
       token,
       user: {
         Objectid: user._id,
         user_id: user.user_id,
         name: user.name,
         role: user.role
       }
     });
   }  catch (e) {
     res.status(401).json({ msg: e.message });
   }
 });

/**
 * @route   POST api/auth/login
 * @desc    perform user login
 */

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  // Simple validation
  if (!name || !password) {
    return res.status(401).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ name });
    if (!user) throw Error('user not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');


    const token = jwt.sign({ user_id: user.user_id , name : user.name, user_object_id: user._id}, JWT_SECRET, { expiresIn: 360000 });
    if (!token) throw Error('cannot sign token');

    res.status(200).json({
      token,
      user: {
        Objectid: user._id,
		user_id: user.user_id,
        name: user.name,
        role: user.role
      }
    });
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
});

/**
 * @route   POST api/auth/register
 * @desc    perform user registration
 */

//new version: handle duplicated name cases and wait for userid initialization
router.post('/register', async (req, res) => {
  var userid = 1;
  var userrole = "user";
  var user1 = await User.findOne({}).sort({user_id: -1});
  if (user1) {
    userid = user1.user_id + 1;
  }
  const {name,  password} = req.body;

  // Simple validation
  if (!name || !password) {
    return res.status(400).json({ msg: 'some fields are missing' });
  }

  if (name.length < 4 || name.length > 20 || password.length < 4 || password.length > 20) {
    return res.status(400).json({ msg: 'username and password should be strings of 4-20 characters' });
  }

  try {
    const user = await User.findOne({ name });
    if (user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('bcrypt error');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('hashing password error');

    const newUser = new User({
      user_id: userid,
      name,
      password: hash,
      role: userrole
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('saving user error');

    const token = jwt.sign({ user_id: savedUser.user_id , name : savedUser.name , user_object_id: savedUser._id}, JWT_SECRET, {expiresIn: 360000});

    res.status(200).json({
      token,
      savedUser: {
		Objectid: savedUser._id,
        user_id: savedUser.user_id,
        name: savedUser.name,
        role: savedUser.role
      }
    });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 */

router.get('/user', auth, async (req, res) => {
  try {
	//res.json(req.user);
    const user = await User.findOne({user_id : req.user.user_id}).select('-password');
    if (!user) throw Error('user not exist');
    res.json(user);
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
});


/**
 * @route   PATCH api/user
 * @desc    perform username update
 */

router.patch("/user", auth, async (req, res)=> {
  try {
    const {name,  user_id} = req.body;
    if (!name || !user_id) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    User.update({user_id}, {$set: {user_id, name}}).exec(function(err, result){
      if (result.n == 0) return res.status(400).json({msg: "comment does not exist"});
      res.status(200).json(result);
    });
  }
  catch (e) {
    res.status(401).json({ error: e.message });
  }
});


/**
 * @route   GET api/auth/user/all
 * @desc    Get user data
 */

router.get("/user/all", auth, async (req, res)=> {
  try {
    const results = await User.find({});
    if(!results) throw Error('No comment exist');
    res.status(200).json(results);
  }
  catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;

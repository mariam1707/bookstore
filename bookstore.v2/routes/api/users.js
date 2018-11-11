const express = require('express');

const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const key = require('../../config/key');
// Load User Model
const User = require('../../models/User');
// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateRestoreInput = require('../../validation/restore');

// @route   GET api/users/test
// @desc    Tests post route
// @acess   public

router.get('/test', (req, res) =>
  res.json({
    msg: 'Users Works!',
  })
);

// @route   GET api/users/register
// @desc    Register user
// @acess   public

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email,
  }).then(user => {
    errors.email = 'Email already exist';
    if (user) {
      return res.status(400).json(errors);
    }

    const avatar = gravatar.url(req.body.email, {
      s: '200', // Size
      r: 'pg', // Ratings
      d: 'mm', // Default
    });
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

// @route   GET api/users/login
// @desc    Login user / Returning JWT Token
// @acess   public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // Find user by model
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Mathced
        // Create JWT payload
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          user_type: user.user_type
        };
        // Sign Token
        jwt.sign(payload, key.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`,
          });
        });
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @acess   Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
});


// @route   GET api/users/restore
// @desc    Restore user password
// @acess   Public
router.post('/restore', (req,res) => {
   const { errors, isValid } = validateRestoreInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  } 
  const { email, newPassword } = req.body;
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }    
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPassword, salt, (err, hash) => {
        errors.restore = err;
        if (err) res.json(errors);
        user.password = hash;
        user
          .save()
          .then(user => res.json(user))
          .catch(err => res.json(err));
      });
    });   
  })
});

module.exports = router;

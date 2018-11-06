const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Profile Model
const Profile = require('../../models/Profile');
//Load User Model
const User = require('../../models/User');



// @route   GET api/profile/test
// @desc    Tests post route
// @acess   public
router.get('/test', (req,res) => {
    return res.json({
        'msg': 'Profile Works!'
    });
});

// @route   GET api/profile
// @desc    Get current user profile
// @acess   private

router.get('/', passport.authenticate('jwt',{session:false}),(req,res)=>{
    const errors = {};

    Profile.findOne({ user: req.user.id })
    .then(profile => {
        if(!profile){
            errors.noprofile = "There is no profile for this users";
            return res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});
 
// @route   POST api/profile
// @desc    Create a new profile
// @acess   private

// router.post('/', passport.authenticate('jwt',{session:false}),(req,res)=>{

// });
 

module.exports = router;
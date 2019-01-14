const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Profile Model
const Genres = require('../../models/Genres');




// @route   GET api/profile/test
// @desc    Tests post route
// @access   public
router.get('/test', (req,res) => {
    return res.json({
        'msg': 'Profile Works!'
    });
});

// @route   GET api/genres
// @desc    Get genres
// @access   public

router.get('/',(req,res) => {
    Genres.find()
        .then(genres => res.json(genres))
        .catch(err => res.status(404).json({nogenresfind: 'No genres!'}));
});

router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
   
   const newGenre = new Book({
       genre: req.body.genre,      
   });

   newGenre.save().then(genre => res.json(genre));
});
 

 

module.exports = router;
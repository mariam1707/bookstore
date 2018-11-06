const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Book = require('../../models/Book');
const User = require('../../models/User');

// @route   GET api/books/test
// @desc    Tests book route
// @acess   public
router.get('/test', (req,res) => {
    return res.json({
        'msg': 'Posts Works!'
    });
})


// @route   GET api/books
// @desc    Get books
// @acess   Private

router.get('/',(req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfind: 'No books!'}));
});

// @route   POST api/books
// @desc    Create new book
// @acess   Private

router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
     // if(req.user.user_type === 'admin'){
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        genre: req.body.genre,
    });
      // }

    newBook.save().then(book => res.json(book));
});


// @route   DELETE api/books
// @desc    Delete book
// @acess   Private

router.delete('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    // if(req.user.user_type === 'admin'){
        Book.findById(req.params.id)
            .then(book => {
                book.remove().then(()=> res.json({success: true}));
            });
    // }
    
    // User.findById(req.user.id)
    // Book.findById(req.params.id)
    //     .then(book => {
    //         //Check for access
    //         if()
    //     })
});

// @route   PATCH api/books
// @desc    Update book
// @acess   Private
router.patch('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    // if(req.user.user_type === 'admin'){
        const updatedBook = {
            author: req.body.author,
            title: req.body.title,
            price: req.body.price,
            genre: req.body.genre,
        }
        Book.findById(req.params.id)
            .then(book => {
                book.update(updatedBook).then(()=> res.json({success: true}));
            });
    // }
    
   
});


module.exports = router;
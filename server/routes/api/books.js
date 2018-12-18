const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment')


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
        .then(books => res.json({"books": books}))
        .catch(err => res.status(404).json({nobooksfind: 'No books!'}));
});
// router.get('/',(req,res) => {
//     const currentPage = parseInt(req.query.currentPage)
//     const perPage = parseInt(req.query.perPage)
//     const query = {}
//     if(currentPage <= 0) {
//           response = {"error" : true,"message" : "invalid page number, should start with 1"};
//           return res.json(response)
//     }
//     query.skip = perPage * (currentPage - 1)
//     query.limit = perPage
//     // Find some documents
//          Book.count({},function(err,totalCount) {
//                if(err) {
//                  response = {"error" : true,"message" : "Error fetching data"}
//                }
//            Book.find({},{},query,function(err,data) {
//                 // Mongo command to fetch all data from collection.
//               if(err) {
//                   response = {"error" : true,"message" : "Error fetching data"};
//               } else {
//                   const totalPages = Math.ceil(totalCount / perPage)
//                   response = {"error" : false,"books" : data,"pages": totalPages};
//               }
//               res.json(response);
//            });
//          })
//   })



// @route   POST api/books
// @desc    Create new book
// @acess   Private

router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
      if(req.user.user_type === 'admin'){
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        genre: req.body.genre,
        image: req.body.image,
    });   

    newBook.save()
    .then(book => res.json(book))
    .catch(err => res.status(404).json({noadd: err}));
}});


// @route   DELETE api/books
// @desc    Delete book
// @acess   Private

router.delete('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
     if(req.user.user_type === 'admin'){
        Book.findById(req.params.id)
            .then(book => {
                book.remove().then(()=> res.json({success: true}));
            })
            .catch(err => res.status(404).json({nobooksfind: 'PROBLEMS WITH DELETE!'}));
     }
    
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
     if(req.user.user_type === 'admin'){
        const updatedBook = {
            author: req.body.author,
            title: req.body.title,
            price: req.body.price,
            genre: req.body.genre,
        }
        Book.findById(req.params.id)
            .then(book => {
                book.update(updatedBook).then(()=> res.json({success: true}));
            })
            .catch(err => res.status(404).json({nobooksfind: 'problems with update!'}));
    }
    
   
});

// @route   GET api/books/filter_date
// @desc    get filtered by date books
// @acess   Public

router.get('/filter_date',(req,res)=>{
   
    // Find some documents
         
    const { start , end } = req.query;    
    const  strm = moment(start);
    const currentPage = parseInt(req.query.currentPage)
    const perPage = parseInt(req.query.perPage)    
    const endm = moment(end);    
    const query = {}
    console.log(start,end);
    query.skip = perPage * (currentPage - 1)
    query.limit = perPage
    if(currentPage <= 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }
  Book.count({    
        "date": {
            $gte: strm.toDate(), 
            $lt: endm.toDate()
        }       
  },function(err,totalCount) {
    if(err) {
      response = {"error" : true,"message" : "Error fetching data"}
    }
Book.find({
 "date": {
     $gte: strm.toDate(), 
     $lt: endm.toDate()
 }
},{},query,function(err,data) {
     // Mongo command to fetch all data from collection.
   if(err) {
       response = {"error" : true,"message" : "Error fetching data"};
   } else {
       const totalPages = Math.ceil(totalCount / perPage)
       response = {"error" : false,"books" : data,"pages": totalPages};
   }
   res.json(response);
});
})


    // Book.find()
    // .then(books => res.json(books))
    // .catch(err => res.status(404).json({noBookWithFilter: err}));
})

module.exports = router;
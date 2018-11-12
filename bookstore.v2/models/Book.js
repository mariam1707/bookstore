const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        max:255,
        required: true,
        default: null,        
    },
    author: {
        type: String,        
        max:255,
        required: true,
        default: null, 
    },    
    image: {
        type: String,
        default:"https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg"
    },
    price: {        
        type: Number,
        required: true,
        default: null, 
    },
    genre: {       
        type: String,
        required: true,
        default: null, 
    },  
    date: {
        type: Date,
        default: new Date(),
      },     

});

module.exports = Book = mongoose.model('books', BookSchema);
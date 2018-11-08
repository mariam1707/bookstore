const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema

const GenresSchema = new Schema({
  genre: {
    type: String,
    required: true,
  },  
});

module.exports = Genres = mongoose.model('genres', GenresSchema);

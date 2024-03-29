const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user_type:{
    type: String,
    required: true,
    default: "user",
  }
});

module.exports = User = mongoose.model('users', UserSchema);

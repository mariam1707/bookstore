const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const books = require('./routes/api/books');
const genres = require('./routes/api/genres');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DBConfig
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Passport middleware

app.use(passport.initialize());

// Passport  Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/books', books);
app.use('/api/genres', genres);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

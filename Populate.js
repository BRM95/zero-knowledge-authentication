const mongoose = require('mongoose');
const register = require('./src/models/register');

const registers = [
  {
    username: 'bilal',
    password: '1234',
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/register',{ useMongoClient: true });

// Go through each movie
registers.map(data => {
  // Initialize a model with movie data
  const registerData = new register(data);
  // and save it into the database
  registerData.save();
});

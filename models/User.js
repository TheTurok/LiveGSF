const mongoose = require('mongoose');
const {Schema} = mongoose;

//scehme is changable as see fit, and nothing will break, it will edit forfuture users.
const userSchema = new Schema({  //data inside of a user
  googleID : String,
  name: String,
  emails: []
});

mongoose.model('users', userSchema);  //make a collection containing users
//if exists, nothing happens

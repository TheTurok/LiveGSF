const mongoose = require('mongoose');
const {Schema} = mongoose;

//scehme is changable as see fit, and nothing will break, it will edit forfuture users.
const traySchema = new Schema({  //data inside of a user
  wafer: Number,
  quantity: Number,
  bin: String
});

module.exports = traySchema;

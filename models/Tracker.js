const mongoose = require('mongoose');
const {Schema} = mongoose;
const TraySchema = require('./Tray');

//scehme is changable as see fit, and nothing will break, it will edit forfuture users.
const trackerSchema = new Schema({  //data inside of a user
  title: String,
  start: Date,
  end: Date,
  trays: [TraySchema],
  reading: String,
  dvh: Boolean,
  stofmr: Boolean,
  hf: Boolean,
  fmr: Boolean,
  link: { type: String, default: ''}
});

mongoose.model('trackers', trackerSchema);  //make a collection containing users
//if exists, nothing happens

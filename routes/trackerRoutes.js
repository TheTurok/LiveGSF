//const _ = require('lodash');
const mongoose = require('mongoose');
const requireAuthentication = require('../middlewares/requireAuthentication');
const moment = require('moment');

const Tracker = mongoose.model('trackers');

module.exports = (app) => {
  app.get( //Get List Of Tacker History
    '/api/tracker',
    requireAuthentication,
    async (req, res) => {
      const trackers = await Tracker.find() //find all the tracker entries
      res.send(trackers);
  });

  app.get('/api/tracker/current', //Get The most rect one, currenlty Running
    async (req, res) => {
      const current = await Tracker.findOne().sort({start: -1}).limit(1);
      res.send(current);
  });

  app.delete('/api/tracker/current',
    async (req, res) => {  //Stamp End Date On the tracker
      const current = await Tracker.deleteOne( { _id : req.body});
      res.send(current);
  });


  app.put('/api/tracker/complete',
    async (req, res) => {  //Stamp End Date On the tracker
      const current = await Tracker.findOneAndUpdate( {_id : req.body }, {end: Date.now()})
      res.send(current);
  });

  app.put('/api/tracker/link',
    async (req, res) => {  //Stamp End Date On the tracker
      console.log('YOLO');
      console.log(req.body);
      const current = await Tracker.findOneAndUpdate( {_id : req.body.id }, {link: req.body.link})
      res.send(current);
  });

  app.post(  //Get Current Tracker
    '/api/tracker',
    async (req, res) => {
      const {title, reading, dvh, hf, stofmr, fmr, hours, minutes} = req.body;
      let wafer1 = wafer2 = wafer3 = wafer4 = null;
      let quantity1 = quantity2 = quantity3 = quantity4 = null;
      let bin1 = bin2 = bin3 = bin4 = null;
      let notes = null;

      if(req.body.notes){notes = req.body.notes;}

      if(req.body.wafer1){wafer1 = req.body.wafer1;}
      if(req.body.wafer2){wafer2 = req.body.wafer2;}
      if(req.body.wafer3){wafer3 = req.body.wafer3;}
      if(req.body.wafer4){wafer4 = req.body.wafer4;}

      if(req.body.quantity1){quantity1 = req.body.quantity1;}
      if(req.body.quantity2){quantity2 = req.body.quantity2;}
      if(req.body.quantity3){quantity3 = req.body.quantity3;}
      if(req.body.quantity4){quantity4 = req.body.quantity4;}

      if(req.body.bin1){bin1 = req.body.bin1;}
      if(req.body.bin2){bin2 = req.body.bin2;}
      if(req.body.bin3){bin3 = req.body.bin3;}
      if(req.body.bin4){bin4 = req.body.bin4;}

      trays = [{
        wafer: wafer1,
        quantity: quantity1,
        bin: bin1
      },{
        wafer: wafer2,
        quantity: quantity2,
        bin: bin2
      },{
        wafer: wafer3,
        quantity: quantity3,
        bin: bin3
      },{
        wafer: wafer4,
        quantity: quantity4,
        bin: bin4
      }];

      let start = Date.now();
      let eta = moment(start).add(hours, 'h').toDate();
      eta = moment(eta).add(minutes, 'm').toDate();

      const tracker = new Tracker({
        title,
        notes,
        start,
        eta,
        trays: trays.map(
          ({wafer, quantity, bin}) => ({
              wafer,
              quantity,
              bin }))
      });

      try{
        await tracker.save();
        res.send(tracker);
      }
      catch(err){
        res.status(422).send(err);
      }

  });
};

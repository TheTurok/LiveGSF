//const _ = require('lodash');
const mongoose = require('mongoose');
const requireAuthentication = require('../middlewares/requireAuthentication');

const Tracker = mongoose.model('trackers');

module.exports = (app) => {
  app.get(
    '/api/tracker',
    requireAuthentication,
    async (req, res) => {
      const trackers = await Tracker.find() //find all the tracker entries
      res.send(trackers);
  });

  app.post(
    '/api/tracker',
    requireAuthentication,
    async (req, res) => {
      const {title, trays} = req.body;


      const tracker = new Tracker({
        title,
        start: Date.now(),
        end: Date.now(),
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

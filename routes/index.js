const express = require('express');
const router = express.Router();
const db = require('../models');
const Hotel = db.model('hotel');
const Restaurant = db.model('restaurant');
const Activity = db.model('activity');

router.get('/', function(req, res, next) {
  Promise.all([Hotel.findAll({}), Restaurant.findAll({}), Activity.findAll({})])
  .then(function(allTables) {
    res.render('index', {hotels: allTables[0], restaurants: allTables[1], activities: allTables[2]});
  }) 
});

module.exports = router;
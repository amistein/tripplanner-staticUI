const Sequelize = require('sequelize');
const db = require('./__db');

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: Sequelize.INTEGER,
  amenities: Sequelize.TEXT
});

module.exports = Hotel;
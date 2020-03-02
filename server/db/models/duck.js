const Sequelize = require('sequelize')
const db = require('../db')

const Duck = db.define('duck', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  details: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsQSvdR_pj0fEURfUe9PRI3dluvHLEPRMqRXvTFARrghX9B2Hg'
  }
})

module.exports = Duck

const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.homedepot-static.com/productImages/8cbda3d4-6af8-47fb-873c-d1ad13f0c29d/svn/yellow-novelty-place-pool-toys-np-rubberduck-family-6pc-64_1000.jpg'
  }
})

module.exports = Product

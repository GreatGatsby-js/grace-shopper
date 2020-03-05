const Sequelize = require('sequelize')
const db = require('../db')

const LineItem = db.define('lineitem', {
  purchasedPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

//foreign key OrderId and ProductId established through associations

module.exports = LineItem

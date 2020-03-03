const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})
//foreign keys TransactionId and UserId established through associations

module.exports = Order

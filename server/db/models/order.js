const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  shipping_Date: {
    type: Sequelize.DATE
  },
  delivery_Date: {
    type: Sequelize.DATE
  },
  shipping_address: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
//foreign keys TransactionId and UserId established through associations

module.exports = Order

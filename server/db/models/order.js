const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalCost: {
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
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['Cart', 'Placed']]
    }
  }
})

module.exports = Order

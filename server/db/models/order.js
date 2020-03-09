const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    }
  },
  totalCost: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    }
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
    defaultValue: 'Cart',
    allowNull: false,
    validate: {
      isIn: [['Cart', 'Placed']]
    }
  }
})

module.exports = Order

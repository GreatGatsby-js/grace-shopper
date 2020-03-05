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
  }
  // leaving status out for now. could be added in future tiers
  // status: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   validate: {
  //     isIn: [['Pending', 'Shipped', 'Cancelled', 'Delivered']]
  //   }
  // }
})

module.exports = Order

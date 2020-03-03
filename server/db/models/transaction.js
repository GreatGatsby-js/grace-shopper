const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  totalCost: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['Pending', 'Shipped', 'Cancelled', 'Delivered']]
    }
  }
})
//foreign key UserId established through associations

module.exports = Transaction

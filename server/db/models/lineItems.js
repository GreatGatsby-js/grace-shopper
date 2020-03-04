const Sequelize = require('sequelize')
const db = require('../db')

const LineItems = db.define('lineitems', {
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

module.exports = LineItems

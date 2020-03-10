const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const LineItem = require('./lineItem')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 */

User.hasMany(Order)
Order.belongsToMany(Product, {through: LineItem})
Product.belongsToMany(Order, {through: LineItem})

module.exports = {
  User,
  Product,
  Order,
  LineItem
}

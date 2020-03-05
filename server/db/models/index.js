const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const LineItem = require('./lineItem')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Product.belongsToMany(User, {through: Order, foreignKey: 'userId'})

User.hasMany(Order)
Order.belongsToMany(Product, {through: LineItem})
Product.belongsToMany(Order, {through: LineItem})

module.exports = {
  User,
  Product,
  Order,
  LineItem
}

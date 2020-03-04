const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const LineItems = require('./lineItems')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Product.belongsToMany(User, {through: Order, foreignKey: 'userId'})

User.hasMany(Order)
Order.belongsToMany(Product, {through: LineItems})
Product.belongsToMany(Order, {through: LineItems})

module.exports = {
  User,
  Product,
  Order,
  LineItems
}

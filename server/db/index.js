const db = require('./db')

const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Transaction = require('./transaction')

// register models
require('./models')

Product.belongsToMany(User, {through: 'Order'})
Product.belongsToMany(Order)
User.hasMany(Product, {through: 'Order'})
User.hasMany(Order)
Transaction.belongsTo(User)
Transaction.hasMany(Order)
module.exports = db

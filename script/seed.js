'use strict'

// const {green, red} = require('chalk')
const db = require('../server/db')
const {User, Product, Order, LineItem} = require('../server/db/models')

const users = require('./seed-users')
const products = require('./seed-products')
const orders = require('./seed-orders')
const lineitems = require('./seed-lineitems')

const seed = async () => {
  try {
    await db.sync({force: true})

    //creates instances and seeds the User database model
    const allUsers = await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )

    //creates instances and seeds the Product database model
    await Promise.all(
      products.map(product => {
        return Product.create(product)
      })
    )

    //creates instances and seeds the Order database model
    const allOrders = await Promise.all(
      orders.map(order => {
        return Order.create(order)
      })
    )

    //creates instances and seeds the LineItem database model
    await Promise.all(
      lineitems.map(lineItem => {
        return LineItem.create(lineItem)
      })
    )

    const user1 = allUsers[0]
    const user2 = allUsers[1]
    const user3 = allUsers[2]

    const order1 = allOrders[0]
    const order2 = allOrders[1]
    const order3 = allOrders[2]

    //setup magic methods so userId populates in orders
    await user1.addOrder(order1)
    await user2.addOrder(order2)
    await user3.addOrder(order3)
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}

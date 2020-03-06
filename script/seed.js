'use strict'

const {green, red} = require('chalk')
const db = require('../server/db')
const {User, Product, Order, LineItem} = require('../server/db/models')

// import users from './seed-users'
const users = require('./seed-users')

// const users = [
//   {
//     email: 'abc@abc.com',
//     password: '12345',
//     salt: 'abc',
//     googleId: 'abc'
//   },

//   {
//     email: 'cdf@cdf.com',
//     password: '6789',
//     salt: 'cdf',
//     googleId: 'cdf'
//   },

//   {
//     email: 'ghi@ghi.com',
//     password: '345688',
//     salt: 'ghi',
//     googleId: 'ghi'
//   },

//   {
//     email: 'jkl@jkl.com',
//     password: '998776',
//     salt: 'jkl',
//     googleId: 'jkl'
//   }
// ]

const products = [
  {
    name: 'book worm duck',
    description:
      'We all love reading a good book, so why shouldnt your rubber duck enjoy one too? Please note, this duck does not squeak',
    price: 100,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
  },

  {
    name: 'happy duck',
    description:
      'Life is even more fun with this cheerful rubber duck! This duck becomes everyones playmate',
    price: 200,
    imageUrl:
      'https://www.internet-toys.com/producten/large/free_and_easy_badeend_26_x_20_x_22_cm_geel_268798_20190103155226.jpg'
  },

  {
    name: 'sad duck',
    description: 'Lets make this sad duck happy buying it',
    price: 300,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51UNZiX8D-L._AC_SX425_.jpg'
  }
]

const orders = [
  {
    totalQuantity: 1,
    totalCost: 100,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork',
    status: 'Placed'
  },
  {
    totalQuantity: 2,
    totalCost: 400,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork',
    status: 'Cart'
  },

  {
    totalQuantity: 3,
    totalCost: 900,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork',
    status: 'Placed'
  }
]

const lineitems = [
  {
    orderId: 1,
    productId: 1,
    purchasedPrice: 10,
    quantity: 1
  },

  {
    orderId: 2,
    productId: 2,
    purchasedPrice: 200,
    quantity: 2
  },

  {
    orderId: 3,
    productId: 3,
    purchasedPrice: 300,
    quantity: 3
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    //creates and seeds the User database model
    const allUsers = await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )

    // const allProducts =
    await Promise.all(
      products.map(product => {
        return Product.create(product)
      })
    )

    const allOrders = await Promise.all(
      orders.map(order => {
        return Order.create(order)
      })
    )

    // const allLineItems =
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

    // const product1 = allProducts[0]
    // const product2 = allProducts[1]
    // const product3 = allProducts[2]

    // const lineitem1 = allLineItems[0]
    // const lineitem2 = allLineItems[1]
    // const lineitem3 = allLineItems[2]
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

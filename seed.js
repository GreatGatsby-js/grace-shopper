const {green, red} = require('chalk')
const {db, User, Product, Order, Transaction} = require('./server/db/models')

const users = [
  {
    email: 'abc@abc.com',
    password: '12345',
    salt: 'abc',
    googleId: 'abc'
  },

  {
    email: 'cdf@cdf.com',
    password: '6789',
    salt: 'cdf',
    googleId: 'cdf'
  },

  {
    email: 'ghi@ghi.com',
    password: '345688',
    salt: 'ghi',
    googleId: 'ghi'
  },

  {
    email: 'jkl@jkl.com',
    password: '998776',
    salt: 'jkl',
    googleId: 'jkl'
  }
]

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
    quantity: 1,
    price: 100,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork'
  },
  {
    quantity: 2,
    price: 200,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork'
  },

  {
    quantity: 2,
    price: 300,
    shipping_Date: new Date(2020, 8, 19),
    delivery_Date: new Date(2020, 9, 29),
    shipping_address: 'Hanover street, NewYork'
  }
]

const transactions = [
  {
    totalCost: 100,
    status: 'Pending'
  },

  {
    totalCost: 400,
    status: 'Shipped'
  },
  {
    totalCost: 600,
    status: 'Delivered'
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    const allProducts = await Promise.all(
      products.map(product => {
        return Product.create(product)
      })
    )

    const allUsers = await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )

    const allOrders = await Promise.all(
      orders.map(order => {
        return Order.create(order)
      })
    )

    const allTransactions = await Promise.all(
      transactions.map(transaction => {
        return Transaction.create(transaction)
      })
    )

    const product1 = allProducts[0]
    const product2 = allProducts[1]
    const product3 = allProducts[2]

    const user1 = allUsers[0]

    const user2 = allUsers[1]
    const user3 = allUsers[2]

    const order1 = allOrders[0]
    const order2 = allOrders[1]
    const order3 = allOrders[2]

    const transaction1 = allTransactions[0]
    const transaction2 = allTransactions[1]
    const transaction3 = allTransactions[2]

    await user1.addProduct(product1)

    await user2.addProduct(product3)
    await user2.addProduct(product1)

    await user3.addProduct(product3)

    await user1.addOrder(order1)

    await user2.addOrder(order2)
    await user3.addOrder(order3)

    // await product1.addUser(user1)
    // await product3.addUser(user2)
    // await product1.addUser(user2)
    //
    // await product3.addUser(user3)

    await transaction1.addUser(user1)
    await transaction2.addUser(user2)
    await transaction3.addUser(user3)

    await transaction1.addOrder(order1)
    await transaction2.addOrder(order2)
    await transaction3.addOrder(order3)
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

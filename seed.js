const {green, red} = require('chalk')
const {db, User, Product} = require('./server/db')

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
    price: '$1000',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p_600x.jpeg?v=1457991497'
  },

  {
    name: 'happy duck',
    description:
      'Life is even more fun with this cheerful rubber duck! This duck becomes everyones playmate',
    price: '$2000',
    imageUrl:
      'https://www.internet-toys.com/producten/large/free_and_easy_badeend_26_x_20_x_22_cm_geel_268798_20190103155226.jpg'
  },

  {
    name: 'sad duck',
    description: 'Lets make this sad duck happy buying it',
    price: '$3000',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51UNZiX8D-L._AC_SX425_.jpg'
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

    const product1 = allProducts[0]
    const product2 = allProducts[1]
    const product3 = allProducts[2]

    const user1 = allUsers[0]
    const user2 = allUsers[1]
    const user3 = allUsers[2]

    await user1.addProduct(product1)
    await user1.addProduct(product2)
    await user1.addProduct(product3)
    await user2.addProduct(product1)
    await user2.addProduct(product3)
    await user3.addProduct(product2)
    await user3.addProduct(product1)
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

const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.homedepot-static.com/productImages/8cbda3d4-6af8-47fb-873c-d1ad13f0c29d/svn/yellow-novelty-place-pool-toys-np-rubberduck-family-6pc-64_1000.jpg'
  }
})

//add product?

//edit products
Product.prototype.editName = async function(newName) {
  this.name = newName
  await this.save()
}

Product.prototype.editDescription = async function(newDescription) {
  this.description = newDescription
  await this.save()
}
Product.prototype.editPrice = async function(newPrice) {
  this.price = newPrice
  await this.save()
}
Product.prototype.editImage = async function(newImageUrl) {
  this.imageUrl = newImageUrl
  await this.save()
}

//remove product
Product.prototype.delete = async function() {
  await this.destroy()
  await this.save()
}

module.exports = Product

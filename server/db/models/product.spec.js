/* global describe beforeEach it */

const db = require('../index')
const {expect} = require('chai')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  // describe('Product Created', () => {
  //   beforeEach(async () => {
  //     await Product.create({
  //       name: 'batman duck',
  //       description: 'I AM BATMAN!!!!! and i am not cheap',
  //       price: 500,
  //       imageUrl:
  //         'https://static1.squarespace.com/static/53208ff6e4b00fbb0f1c2d65/533088f1e4b017ad58855af2/5c69ca397817f7d0df538357/1550437388826/'
  //     })
  //   })

  //   it('expects testDuck to be created', async () => {
  //     const batmanDuck = await Product.findOne({where: {name: 'batman duck'}})
  //     expect(batmanDuck.name).to.be.equal('batman duck')
  //   })
  // }) // end describe('product create')

  describe('instanceMethods', () => {
    beforeEach(async () => {
      await Product.create({
        name: 'batman duck',
        description: 'I AM BATMAN!!!!! and i am not cheap',
        price: 500,
        imageUrl:
          'https://static1.squarespace.com/static/53208ff6e4b00fbb0f1c2d65/533088f1e4b017ad58855af2/5c69ca397817f7d0df538357/1550437388826/'
      })
    })

    let batmanDuck

    it('expects testDuck to be created', async () => {
      batmanDuck = await Product.findOne({where: {name: 'batman duck'}})
      expect(batmanDuck.name).to.be.equal('batman duck')
    })

    it('expects testDuck name to be edited', async () => {
      let duck = await Product.findOne({where: {name: 'batman duck'}})
      duck.editName('Ricardo')

      expect(duck.name).to.be.equal('Ricardo')
    })

    it('expects testDuck to be deleted', async function() {
      const duck = await Product.findOne({where: {name: 'batman duck'}})
      await duck.delete()

      const deletedDuck = await Product.findOne({where: {name: 'batman duck'}})
      expect(deletedDuck).to.be.equal(null)
    })
  }) // end describe('instanceMethods')
}) // end describe('Product model')

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
    //instance method tests here if any
    // let batmanDuck;
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

    it('expects testDuck name to be changed', async () => {
      let duck = await Product.findOne({where: {name: 'batman duck'}})
      duck.editName('Ricardo')

      expect(duck.name).to.be.equal('Ricardo')
    })

    // it('expects testDuck to be deleted', async function () {
    // let byebyeDuck = await Product.findOne({where: {name: 'batman duck'}})
    // await byebyeDuck.delete();
    // // console.log("byebyeduck", byebyeDuck);
    // expect(byebyeDuck).to.be.equal(undefined)
    // })
  }) // end describe('instanceMethods')
}) // end describe('Product model')

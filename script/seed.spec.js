'use strict'
/* global describe it */
const {expect} = require('chai')
const {User, Product, Order, LineItem} = require('../server/db/models')

const seed = require('./seed')

describe('seed script', () => {
  it('completes successfully', seed)

  it('populates the database with at least three robots', async () => {
    const seedUser = await User.findAll()
    expect(seedUser).to.have.lengthOf.at.least(3)
  })

  it('populates the database with at least three robots', async () => {
    const seedProduct = await Product.findAll()
    expect(seedProduct).to.have.lengthOf.at.least(3)
  })

  it('populates the database with at least three robots', async () => {
    const seedOrder = await Order.findAll()
    expect(seedOrder).to.have.lengthOf.at.least(3)
  })

  it('populates the database with at least three robots', async () => {
    const seedLineItem = await LineItem.findAll()
    expect(seedLineItem).to.have.lengthOf.at.least(3)
  })
})

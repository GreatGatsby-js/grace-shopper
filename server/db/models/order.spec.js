////////WORKING ON THE SPECS TO PASS!!!!!

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order Model', () => {
  let order
  before(() => db.sync({force: true}))
  beforeEach(() => {
    order = {
      totalQuantity: 1,
      totalCost: 100,
      shipping_Date: new Date(2020, 8, 19),
      delivery_Date: new Date(2020, 9, 29),
      shipping_address: 'Hanover street, NewYork'
    }
  })
  afterEach(() => db.sync({force: true}))

  it('has fields totalQuantity, totalCost, shipping_Date, delivery_Date,shipping_address', async () => {
    order.notARealAttribute = 'does not compute'
    const savedOrder = await Order.create(order)
    expect(savedOrder.totalQuantity).to.equal(1)
    expect(savedOrder.totalCost).to.equal(100)
    expect(savedOrder.shipping_Date).to.equal(new Date(2020, 8, 19))
    expect(savedOrder.delivery_Date).to.equal(new Date(2020, 9, 29))
    expect(savedOrder.shipping_address).to.equal('Hanover street, NewYork')
    expect(savedOrder.notARealAttribute).to.equal(undefined)
  })
})

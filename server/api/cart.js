/* eslint-disable camelcase */
const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

router.get('/order/:userId', async (req, res, next) => {
  try {
    let order = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      }
    })
    // console.log('order', order)
    res.send(order)
  } catch (err) {
    console.error(err)
  }
})

router.post('/order', async (req, res, next) => {
  const price = req.body.product.price * req.body.qty
  try {
    const order = await Order.create({
      totalQuantity: req.body.qty,
      totalCost: price,
      status: 'Cart',
      shipping_address: 'temp',
      userId: req.body.userId
    })
    res.send(200)
  } catch (error) {
    next(error)
  }
})

router.put('/order/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    const oldPrice = order.totalCost
    const oldTotalQty = order.totalQuantity

    await order.update({
      totalCost: oldPrice + req.body.product.price,
      totalQuantity: oldTotalQty + req.body.qty
    })
    await order.save()

    // const product = await Product.findByPk(req.body.product.id);
    // await order.addProduct(product, {
    //   quantity: 1,
    //   purchasedPrice: 3
    // })

    // await order.addProduct(req.body.product, )

    //user.addProject(project, { through: { role: 'manager' }});
    // await order.addProduct(req.body.product, {
    //   quantity: req.body.qty,
    //   purchasedPrice: req.body.product.price * req.body.qty
    // })

    res.send(200)
  } catch (error) {
    next(error)
  }
})

router.put('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    await order.update({
      status: 'Placed'
    })
    await order.save()
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const response = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      },
      include: [Product]
    })
    const products = res.send(response[0].products)
  } catch (error) {
    next(error)
  }
})

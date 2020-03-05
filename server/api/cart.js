/* eslint-disable camelcase */
const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

router.get('/order/:userId', async (req, res, next) => {
  try {
    let order = await Order.findAll({
      where: {
        id: req.params.userId,
        status: 'Cart'
      }
    })
    res.json(order)
  } catch (err) {
    console.error(err)
  }
})

router.post('/order', async (req, res, next) => {
  console.log('hit POST')
  console.log('body is ', req.body)
  const price = req.body.product.price * req.body.qty
  try {
    const order = await Order.create({
      totalQuantity: req.body.qty,
      totalCost: price,
      status: 'Cart',
      shipping_address: 'temp',
      userId: req.body.userId
      //double check on if we can do this :-)
    })
    console.log('order is ', order)

    // console.log('final order id', order.id)
    // await order.addProduct(req.body.product,{through: {
    //   quantity: req.body.qty,
    //   purchasedPrice: price
    // }})
  } catch (error) {
    next(error)
  }
})

router.put('/order/:orderId', async (req, res, next) => {
  try {
    // await req.body.data.update
    const order = await Order.findByPk(req.params.orderId)
    const oldPrice = order.totalCost
    const oldTotalQty = order.totalQuantity

    await order.update({
      totalCost: oldPrice + req.body.product.price,
      totalQuantity: oldTotalQty + req.body.qty
    })

    await order.addProduct(req.body.product, {
      through: {
        quantity: req.body.qty,
        purchasedPrice: req.body.product.price * req.body.qty
      }
    })

    res.json()
  } catch (error) {
    next(error)
  }
})

// router.get('/:orderId', async (req, res, next) => {
//   try {
//     const orderId = req.params.orderId
//     // const lineItems = await Order.findAll({
//     //   where: {
//     //     id: orderId,
//     //     include: [{model: Product}]
//     //   }
//     // })
//     const lineItems = await Order.findByPk({
//       where: {
//         id: orderId,
//         include: [{model: Product}]
//       }
//     })
//   } catch (error) {
//     next(error)
//   }
// })

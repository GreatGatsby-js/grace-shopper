const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

router.get('/order/:userId', async (req, res, next) => {
  try {
    let order = await Order.findAll({
      where: {
        id: req.params.userId
        // status: 'cart'
      }
    })
    if (!order) {
      order = await Order.create({
        totalQuantity: 0,
        totalCost: 0,
        // status: 'cart',
        shipping_address: 'temp'
      })
      order.addUser(req.params.userId)
    }
    console.log('final order id', order.id)
    res.send(order.id)
  } catch (err) {
    console.error(err)
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

const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

router.get('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId

    // const lineItems = await Order.findAll({
    //   where: {
    //     id: orderId,
    //     include: [{model: Product}]
    //   }
    // })

    const lineItems = await Order.findByPk({
      where: {
        id: orderId,
        include: [{model: Product}]
      }
    })
  } catch (error) {
    next(error)
  }
})

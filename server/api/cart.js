/* eslint-disable camelcase */
const router = require('express').Router()
const {Order, Product, LineItem} = require('../db/models')
module.exports = router

router.get('/order/:userId', async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      }
    })
    res.send(order)
  } catch (err) {
    next(err)
  }
})

//getting order total, only
router.get(`/order/total/:orderId`, async (req, res, next) => {
  try {
    let order = await Order.findByPk(req.params.orderId)
    res.send(order.dataValues.totalCost)
  } catch (err) {
    next(err)
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
    const lineItem = await LineItem.create({
      orderId: order.id,
      productId: req.body.product.id,
      quantity: 1,
      purchasedPrice: req.body.product.price
    })
    res.send(order)
  } catch (error) {
    next(error)
  }
})

router.put('/order/:orderId', async (req, res, next) => {
  try {
    let lineitem = await LineItem.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.body.product.id
      }
    })
    if (lineitem) {
      const oldQty = lineitem.quantity
      const oldPrice_lineitem = lineitem.purchasedPrice
      await lineitem.update({
        orderId: req.params.orderId,
        productId: req.body.product.id,
        quantity: oldQty + 1,
        purchasedPrice: oldPrice_lineitem + req.body.product.price
      })
      await lineitem.save()
    } else {
      lineitem = await LineItem.create({
        orderId: req.params.orderId,
        productId: req.body.product.id,
        purchasedPrice: req.body.product.price,
        quantity: 1
      })
    }

    const order = await Order.findByPk(req.params.orderId)
    const oldPrice = order.totalCost
    const oldTotalQty = order.totalQuantity

    await order.update({
      totalCost: oldPrice + req.body.product.price,
      totalQuantity: oldTotalQty + req.body.qty
    })
    await order.save()

    res.send(200)
  } catch (error) {
    next(error)
  }
})

router.delete('/:userId/:orderId/:productId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.orderId
      },
      include: [
        {
          model: Product,
          through: {
            where: {
              productId: req.params.productId
            }
          }
        }
      ]
    })
    const lineitem = order.dataValues.products[0].lineitem
    const removedItemQty = lineitem.quantity
    const removedItemPrice = lineitem.purchasedPrice
    await lineitem.destroy()
    const orderOldQty = order.totalQuantity

    const orderOldCost = order.totalCost
    await order.update({
      totalCost: orderOldCost - removedItemPrice,
      totalQuantity: orderOldQty - removedItemQty
    })
    await order.save()
    const response = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      },
      include: [Product]
    })
    res.send(response)
  } catch (err) {
    next(err)
  }
})

//method for increasing or decreasing product quantity in the cart. Returns the updated order
router.put('/:userId/:orderId/:productId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.orderId
      },
      include: [
        {
          model: Product,
          through: {
            where: {
              productId: req.params.productId
            }
          }
        }
      ]
    })
    const orderOldQty = order.totalQuantity
    const orderOldCost = order.totalCost
    const product = order.dataValues.products[0]
    const lineitem = product.lineitem
    const oldItemQty = lineitem.quantity
    const oldItemPrice = lineitem.purchasedPrice
    if (req.body.action === 'increase') {
      await lineitem.update({
        quantity: oldItemQty + 1,
        purchasedPrice: oldItemPrice + product.price
      })
      await order.update({
        totalQuantity: orderOldQty + 1,
        totalCost: orderOldCost + product.price
      })
    } else if (oldItemQty === 1) {
      //delete from db
      await lineitem.destroy()
      await order.update({
        totalQuantity: orderOldQty - 1,
        totalCost: orderOldCost - product.price
      })
    } else {
      await lineitem.update({
        quantity: oldItemQty - 1,
        purchasedPrice: oldItemPrice - product.price
      })
      await order.update({
        totalQuantity: orderOldQty - 1,
        totalCost: orderOldCost - product.price
      })
    }
    await lineitem.save()
    await order.save()
    const response = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      },
      include: [Product]
    })
    res.send(response)
  } catch (err) {
    next(err)
  }
})

//method for "checkout", changing an order from cart to placed
router.put('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    await order.update({
      status: 'Placed'
    })
    await order.save()
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

//method for getting the cart, aka lineitems
router.get('/:userId', async (req, res, next) => {
  try {
    const response = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      },
      include: [Product]
    })
    res.send(response)
  } catch (error) {
    next(error)
  }
})

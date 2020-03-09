/* eslint-disable camelcase */
const router = require('express').Router()
const {Order, Product} = require('../db/models')
module.exports = router

router.get('/order/:userId', async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      }
    })
    // console.log('order', order)
    res.send(order)
  } catch (err) {
    next(err)
  }
})

//getting order total, only
router.get(`/order/total/:orderId`, async (req, res, next) => {
  console.log('\ngetting total\n')
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
    res.sendStatus(200)
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
    await lineitem.destroy()
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
    const product = order.dataValues.products[0]
    const lineitem = product.lineitem
    const oldQty = lineitem.dataValues.quantity
    if (req.body.action === 'increase') {
      await lineitem.update({
        quantity: oldQty + 1
      })
    } else if (oldQty === 1) {
      //delete from db
      await lineitem.destroy()
    } else {
      await lineitem.update({
        quantity: oldQty - 1
      })
    }
    await lineitem.save()
    const response = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart'
      },
      include: [Product]
    })
    // console.log('order', order)
    res.send(response)
    //decrease quantity on this product
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

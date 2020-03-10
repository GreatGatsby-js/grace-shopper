const router = require('express').Router()
const {Product} = require('../db/models')

const authorize = require('./authentication') //middleware function that verifies user is admin

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    //NOTE: sending product objects with all their information intact.
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  const prodId = req.params.productId
  try {
    const product = await Product.findByPk(prodId)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', authorize, async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.put('/:productId', authorize, async (req, res, next) => {
  const prodId = req.params.productId
  try {
    const product = await Product.findByPk(prodId)
    await product.update(req.body)
    await product.save()
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.delete('/:productId', authorize, async (req, res, next) => {
  const prodId = req.params.productId
  try {
    await Product.destroy({
      where: {
        id: prodId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

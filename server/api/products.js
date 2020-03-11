const router = require('express').Router()
const {Product} = require('../db/models')

const authorize = require('./authentication') //middleware function that verifies user is admin

module.exports = router

// GETS ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    //NOTE: sending product objects with all their information intact.
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// GETS SINGLE PRODUCT
router.get('/:productId', async (req, res, next) => {
  const prodId = req.params.productId
  try {
    const product = await Product.findByPk(prodId)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// ADD NEW PRODUCT
router.post('/', authorize, async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// EDIT A PRODUCT
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

// REMOVE A PRODUCT
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

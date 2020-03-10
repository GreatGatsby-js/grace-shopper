const router = require('express').Router()
const {Product} = require('../db/models') //NOTE: assumes a model named Product exists

const authorize = require('./authentication') //function that verifies user is admin

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

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.put('/:projectId', async (req, res, next) => {
  const prodId = req.params.productId
  try {
    const product = await Product.findByPk(prodId)
    await product.update(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.delete('/:projectId', async (req, res, next) => {
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

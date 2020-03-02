const router = require('express').Router()
const {Product} = require('../db/models') //NOTE: assumes a model named Product exists
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

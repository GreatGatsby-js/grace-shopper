const router = require('express').Router()
const {User} = require('../db/models')

const authorize = require('./authentication') //middleware function that verifies user is admin

module.exports = router

router.get('/', authorize, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// middleware for authentication
const {User} = require('../db/models')

async function authorize(req, res, next) {
  const user = await User.findByPk(req.user.id)

  if (user.isAdmin) {
    next() //continue to next middleware if user is an admin
  } else {
    res.status(403).redirect('/') // if not admin, redirect them
  }
}

module.exports = authorize

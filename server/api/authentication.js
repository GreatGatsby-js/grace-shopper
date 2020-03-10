// middleware for authentication

async function authorize(req, res, next) {
  console.log('im in authentication')
  // set user on-success
  const user = await req.db.users.findByPk(req.user.id)
  console.log('user check', user)

  if (user.isAdmin) {
    next() //continue to next middleware if user is an admin
  } else {
    res.status(403).redirect('/') // if not admin, redirect them
  }
}

module.exports = authorize

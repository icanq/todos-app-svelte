const { User } = require('../models')
const { verify } = require('jsonwebtoken')
const createError = require('http-errors')

class Auth {
  static authentication = (req, res, next) => {
    try { 
      req.loggedInUser = verify(req.headers.access_token, 'kucing')
      User.findByPk(req.loggedInUser.id)
        .then(result => {
          if(!result) { throw createError(404, "User not found!")}
          next()
        })
        .catch(err => {
          next(err)
        })
    }
    catch (err){
      next(err)
    }

  }
}

module.exports = { authentication: Auth.authentication }
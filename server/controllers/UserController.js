const { User } = require('../models');
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class UserController {
  static async register(req, res) {
    try {
      const data = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      res.status(201).json({
        id: data.id,
        username: data.username,
        email: data.email
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async login(req, res) {
    try {
      let unameOrEmail = {}
      if (req.body.email) {
        unameOrEmail.email = req.body.email
      } else { 
        unameOrEmail.username = req.body.username
      }
      const data = await User.findOne({
        where: unameOrEmail
      })
      if (data) {
        if (compareSync(req.body.password, data.password)) {
          const access_token = sign({
            id: data.id,
            email: data.email,
          }, 'SECRET');
          res.status(200).json({ access_token });
        } else {
          res.status(404).json({message: "not found"})
        }
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = UserController
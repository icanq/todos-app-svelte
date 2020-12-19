const { Todo } = require('../models');

class TodoController {
  static async create (req, res) {
    try {
      const data = await Todo.create({
        
      })
    } catch (next) {}
  }
  static async read (req, res) {

  }
  static async delete (req, res) {

  }
}

module.exports = TodoController
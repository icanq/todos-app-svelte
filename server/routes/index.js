const router = require('express').Router()
const { UserController, TodoController } = require('../controllers')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/', TodoController.read)
router.post('/', TodoController.create)
router.put('/', TodoController.update)
router.delete('/', TodoController.delete)

module.exports = router
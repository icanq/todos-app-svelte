const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send('hi from router')
})

module.exports = router
const router = require('express').Router()

router.use('/api/todos', require('./todos.routes'))

router.get('*', (req, res) => {
  res.sendfile('./public/index.html')
})

module.exports = router

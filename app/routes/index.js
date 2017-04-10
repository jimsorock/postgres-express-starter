const router = require('express').Router()
const todoController = require('../controllers/todo.controller')

router.get('/api/todos/ping', todoController.ping)
router.post('/api/todos', todoController.create)
router.get('/api/todos', todoController.list)

// frontend routes =========================================================
// route to handle all angular requests
router.get('*', (req, res) => {
  res.sendfile('./public/index.html')
})

module.exports = router

const router = require('express').Router()
const todoController = require('../controllers/todo.controller')
const todoItemController = require('../controllers/todoItem.controller')

router.get('/ping', todoController.ping)
router.post('/', todoController.create)
router.get('/', todoController.list)
router.get('/:todoId', todoController.getById)
router.put('/:todoId', todoController.update)
router.delete('/:todoId', todoController.remove)

// todoItem routes
router.post('/:todoId/items', todoItemController.create)
router.put('/:todoId/items/:todoItemId', todoItemController.update)
router.delete('/:todoId/items/:todoItemId', todoItemController.remove)

module.exports = router

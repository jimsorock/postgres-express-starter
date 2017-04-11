const TodoItemService = require('../services/todoItem.service')

module.exports = {
  create(req, res) {
    TodoItemService
      .create(req.params.todoId, req.body)
      .then(result => res.status(201).json(result))
      .catch(reason => res.status(400).json(reason))
  },

  update(req, res) {
    return TodoItemService
      .getById(req.params)
      .then(todoItem => {
        if (!todoItem) {
          return res
            .status(404)
            .send({message: 'Todo Not Found'})
        }
        return TodoItemService.update(todoItem, req.body)
      })
      .then(() => res.sendStatus(204))
      .catch(reason => res.status(400).json(reason))
  },

  remove(req, res) {
    return TodoItemService
      .getById(req.params)
      .then(todoItem => {
        if (!todoItem) {
          return res
            .status(404)
            .send({message: 'TodoItem Not Found'})
        }
        return TodoItemService.remove(todoItem)
      })
      .then(() => res.sendStatus(202))
      .catch(reason => res.status(400).json(reason))
  }
}

const TodoService = require('../services/todo.service')

module.exports = {
  create(req, res) {
    return TodoService
      .create(req.body)
      .then(result => res.status(201).json(result))
      .catch(reason => res.status(400).json(reason))
  },

  list(req, res) {
    return TodoService
      .list()
      .then(result => res.status(200).json(result))
      .catch(reason => res.status(400).json(reason))
  },

  getById(req, res) {
    return TodoService
      .getById(req.params.todoId)
      .then(result => {
        if (!result) {
          return res
            .status(404)
            .send({message: 'Todo Not Found'})
        }
        res
          .status(200)
          .json(result)
      })
      .catch(reason => res.status(400).json(reason))
  },

  update(req, res) {
    return TodoService
      .getById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res
            .status(404)
            .send({message: 'Todo Not Found'})
        }
        return TodoService.update(todo, req.body)
      })
      .then(() => res.sendStatus(204))
      .catch(reason => res.status(400).json(reason))
  },

  remove(req, res) {
    return TodoService
      .getById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res
            .status(404)
            .send({message: 'Todo Not Found'})
        }
        return TodoService.remove(todo)
      })
      .then(() => res.sendStatus(202))
      .catch((reason) => res.status(400).json(reason))
  },

  ping(req, res) {
    res.send('PONG!')
  }
}

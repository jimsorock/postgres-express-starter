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

  ping(req, res) {
    res.send('PONG!')
  }
}

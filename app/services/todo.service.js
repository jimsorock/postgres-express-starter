const Todo = require('../models').Todo

module.exports = {
  create(reqBody) {
    return Todo.create({title: reqBody.title})
  },
  list(req, res) {
    return Todo.all()
  }
}

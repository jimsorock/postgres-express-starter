const Todo = require('../models').Todo
const TodoItem = require('../models').TodoItem

module.exports = {
  create(reqBody) {
    return Todo.create({title: reqBody.title})
  },

  update(todo, reqBody) {
    return todo.update(reqBody, {
      fields: Object.keys(reqBody)
    })
  },

  remove(todo) {
    return todo.destroy()
  },

  list() {
    return Todo.findAll({
      include: [
        {
          model: TodoItem,
          as: 'todoItems'
        }
      ]
    })
  },

  getById(todoId) {
    return Todo.findById(todoId, {
      include: [
        {
          model: TodoItem,
          as: 'todoItems'
        }
      ]
    })
  }
}

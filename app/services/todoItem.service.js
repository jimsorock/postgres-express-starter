const TodoItem = require('../models').TodoItem

module.exports = {
  create(todoId, reqBody) {
    return TodoItem.create({content: reqBody.content, todoId: todoId})
  },

  update(todoItem, reqBody) {
    return todoItem.update(reqBody, {
      fields: Object.keys(reqBody)
    })
  },

  remove(todoItem) {
    return todoItem.destroy()
  },

  getById(reqParams) {
    return TodoItem.find({
      where: {
        id: reqParams.todoItemId,
        todoId: reqParams.todoId
      }
    })
  }
}

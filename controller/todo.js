const express = require('express')
const routes = express.Router()
const todoService = require('../service/todo')

routes.get('/',todoService.getTodos)
routes.post('/',todoService.postTodos)
routes.delete('/:id',todoService.deleteTodos)
routes.put('/:id',todoService.updateTodos)

module.exports = routes

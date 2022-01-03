const express = require('express');
const app = express();
const todo_controller = require('./controllers/todo_controller');


app.get('/todos',todo_controller.getAllTodos)
app.post('/todo',todo_controller.addTodo)
app.delete('/todo',todo_controller.deleteTodo)
app.patch('/todo',todo_controller.updateTodo)
app.listen(6000, function(){
console.log('App has started to run');
})
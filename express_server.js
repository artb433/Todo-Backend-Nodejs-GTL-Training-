
const express = require('express');
const app = express();
const todo_controller = require('./controllers/todo_controller');
const mongoose = require ('mongoose');
require('dotenv').config();

app.use(express.json());
app.get('/todos',todo_controller.getAllTodos);
app.post('/todos',todo_controller.addTodo);
app.patch('/todos/:todoId',todo_controller.updateTodoById);
app.delete('/todos/:todoId',todo_controller.deleteTodoById);
app.get('/todos/:todoId', todo_controller.getTodoById);

app.listen(6000, function(){
console.log('App has started to run');
mongoose.connect(process.env.DB_URL)
.then(function(){
 console.log('Success: Connected to you DB');
})
.catch(function(error){
    console.log('Failed to connect:' , error.message);
 
});
});
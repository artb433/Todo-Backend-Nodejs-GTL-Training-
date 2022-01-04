const express = require('express');
const app = express();
const todo_controller = require('./controllers/todo_controller');
const mongoose = require ('mongoose');

app.use(express.json());

app.get('/todos',todo_controller.getAllTodos);
app.post('/todo',todo_controller.addTodo);
app.patch('/todo',todo_controller.updateTodoById);
app.delete('/todo',todo_controller.deleteTodoById);
app.get('/todo', todo_controller.getTodoById);




app.listen(6000, function(){
console.log('App has started to run');
mongoose.connect('mongodb+srv://nodeWithGTL:Drrahman76@cluster0.pib1g.mongodb.net/nodeWithGTL_DB?retryWrites=true&w=majority')
.then(function(){
 console.log('Success: Connected to you DB');
})
.catch(function(error){
    console.log('Failed to connect:' , error.message);
 
});
});
const express = require('express');
const app = express();
const todo_controller = require('./controllers/todo_controller');
const mongoose = require ('mongoose');


app.get('/todos',todo_controller.getAllTodos);
app.post('/todos',todo_controller.addTodo);
app.patch('/todos',todo_controller.updateTodoById);
app.delete('/todos',todo_controller.deleteTodoById);




app.listen(6000, function(){
console.log('App has started to run');
mongoose.connect('mongodb+srv://nodeWithGTL:Drrahman76@cluster0.pib1g.mongodb.net/nodeWithGTL_DB?retryWrites=true&w=majority')
.then(function(){
 console.log('Success: Connected to you DB');
})
.catch(function(error){
    console.log('Failed Not connected:' , error.message);
});
});
require('dotenv').config();
const express = require('express');
const app = express();
const todo_controller = require('./controllers/todo_controller');
const mongoose = require ('mongoose');

const PORT = process.env.PORT || 6000;

app.use(express.json());
app.get('/',function(req,res){
    res.status(200).json({message: 'Welcome to Art.b API with GTL'});
});
app.get('/todos',todo_controller.getAllTodos);
app.post('/todos',todo_controller.addTodo);
app.patch('/todos/:todoId',todo_controller.updateTodoById);
app.delete('/todos/:todoId',todo_controller.deleteTodoById);
app.get('/todos/:todoId', todo_controller.getTodoById);

app.listen(PORT, function(){
console.log(`App has started to run, listening to port ${PORT}`);
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(function(){
 console.log('Success: Connected to you DB');
})
.catch(function(error){
    console.log('Failed to connect:' , error.message);
 
});
});
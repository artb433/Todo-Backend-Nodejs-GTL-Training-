const { async } = require('jshint/src/prod-params');
const Todo= require('../models/Todo');


async function addTodo(req , res){
try {
   const newTodo = await Todo.create(req.body);
   res.status(200).json(newTodo);
} catch (error) {
    console.log("Can't add todo: ", error.message);
    res.status(404).json({message: 'Can\'t add todo data'});
}
}
async function updateTodoById(req, res){

try {
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, req.body);
    res.status(200).json({message: 'Todo updated successfully'});
} catch (error) {
    console.log('Can\'t update todo: ', error.message);
    res.status(404).json({message: 'Todo can\'t be updated'});
    
}
}
async function getAllTodos(req , res){
try {
    const todos = await Todo.find();
    res.status(200).json(todos);
} catch (error) {
    console.log('error fetching todos', error.message);
    res.status(404).json({message: 'Can\'t retrieve all todos'});
}
}
async function getTodoById(req, res){
try {
    const todo = await Todo.findById(req.params.todoId);
    res.status(200).json(todo);
} catch (error) {
    console.log('Can\'t get todo', error.message);
    res.status(404).json({message: 'Todo can\'t be fetched'});
    
}
}

async function deleteTodoById(req , res){
    const todoId = req.params.todoId;
try {
   const todo = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({message: 'Todo deleted successfully'});
} catch (error) {
    res.status(404).json({message: 'Todo can\'t be deleted'});
    console.log('Can\'t delete this todo', error.message);
    
}
}

module.exports = {
    getAllTodos,
    updateTodoById,
    addTodo,
    deleteTodoById,
    getTodoById,
    getTodoById
}
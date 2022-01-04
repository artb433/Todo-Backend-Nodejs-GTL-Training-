const { async } = require('jshint/src/prod-params');
const Todo= require('../models/Todo');


async function addTodo(req , res){
try {
   const newTodo = await Todo.create(req.body);
   res.status(200).json(newTodo);
} catch (error) {
    console.log("can't add todo: ", error.message);
    res.status(404).json({message: 'can\'t add todo data'});
}
}
function updateTodoById(req, res){

}
 function getAllTodos(req , res){

}
function deleteTodoById(req , res){

}

module.exports = {
    getAllTodos,updateTodoById,addTodo,deleteTodoById
}
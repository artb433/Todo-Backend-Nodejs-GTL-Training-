const { async } = require('jshint/src/prod-params');
const todo_model= require('./models/todo_model');


async function addTodo(req , res){
try {
   const newTodo = await todo_model.create(req.body);
   res.status(200).json(newTodo);
} catch (error) {
    console.log("can't add todo: ", error.message);
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
const mongoose = require ('mongoose');
const todoSchema = new mongoose.Schema({
title: String,
category:String,
isCompleted:Boolean,
deadline:Date,
startDate:Date,
});

const todo_model = mongoose.model('todo',todoSchema);
module.exports = todo_model;
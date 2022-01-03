const mongoose = require ('mongoose');
const todoSchema = new mongoose.Schema({
title:String,
category:String,
isCompleted:Boolean,
deadline:Date,
startDate:Date,
});

const todoModel = mongoose.model('todo',todoSchema);
module.exports = todoModel;
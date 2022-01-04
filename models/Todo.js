const mongoose = require ('mongoose');
const todoSchema = new mongoose.Schema({
title: {
    type: String,
required:true,
},
category:{
    type: String,
required:true,
},
isCompleted:{
    type: Boolean,
required:true,
},
deadline:{
    type: Date,
required:true,
},
startDate:{
    type: Date,
required:true,
},
});

const Todo = mongoose.model('todo',todoSchema);
module.exports = Todo;
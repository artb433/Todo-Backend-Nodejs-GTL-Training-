const express = require('express');
const app = express();

app.get('/',function(req,res){
res.send('this is a GET request to /');
})
app.post('/',function(req,res){
res.send('this is a POST request to /');
})
app.delete('/',function(req,res){
res.send('this is a DELETE request to /');
})
app.listen(6000, function(){
console.log('App has started to run');
})
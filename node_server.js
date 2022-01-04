const http = require('http');
const server = http.createServer(function(req,res){
// console.log(req.method);
if (req.method == 'POST' && req.url=='/'){
    // console.log('This is a post');
    res.end('This is a post req');
}else if(req.method == 'GET' && req.url=='/'){
    // console.log('This is a get method');
    res.end('This is a get req');
}else if(req.method == 'PUT' && req.url=='/'){
    // console.log('This is a get method');
    res.end('This is a put req');
}else if(req.method == 'PATCH' && req.url=='/'){
    // console.log('This is a get method');
    res.end('This is a patch req');
}else if(req.method == 'DELETE' && req.url=='/'){
    // console.log('This is a get method');
    res.end('This is a delete req');
}else {
    // console.log('Ivalid req');
    res.end('Invalid req made');
}
});
server.listen(7000, function(){
    console.log('Serving has started a run process');
});
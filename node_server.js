const http = require('http');
const server = http.createServer(function(request,response){
// console.log(request.method);
if (request.method == 'POST' && request.url=='/'){
    // console.log('This is a post');
    response.end('This is a post request')
}else if(request.method == 'GET' && request.url=='/'){
    // console.log('This is a get method');
    response.end('This is a get request')
}else if(request.method == 'PUT' && request.url=='/'){
    // console.log('This is a get method');
    response.end('This is a put request')
}else if(request.method == 'PATCH' && request.url=='/'){
    // console.log('This is a get method');
    response.end('This is a patch request')
}else if(request.method == 'DELETE' && request.url=='/'){
    // console.log('This is a get method');
    response.end('This is a delete request')
}else {
    // console.log('Ivalid request');
    response.end('Invalid request made')
}
});
server.listen(7000, function(){
    console.log('Serving has started a run process');
});
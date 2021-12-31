const http = require('http');
const server = http.createServer(function(request,response){
response.end('Your request has been received successfully');
});
server.listen(7000);
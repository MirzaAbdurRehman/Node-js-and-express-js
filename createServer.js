const http = require('http');
const { text } = require('stream/consumers');

http.Server((request,response) => {
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.write('<h2>Hello From Node JS</h2>')
    response.end()
}).listen(1000)
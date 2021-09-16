const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/echo') {
        // res.statusCode = 200;
        // res.setHeader('Content-type', 'text/plain');
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        res.end('hello world\n');
    } else {
        res.statusCode = 404;
        res.end();
    }

})

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');
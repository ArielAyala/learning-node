const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/echo') {
        let body = [];

        req.on('data', chunkData => {
            body.push(chunkData);
        })
            .on('end', () => {
                // res.statusCode = 200;
                // res.setHeader('Content-type', 'text/plain');
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                // res.end('hello world\n');
                body = Buffer.concat(body).toString();
                res.end(body);
            })


    } else {
        res.statusCode = 404;
        res.end();
    }

})

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');
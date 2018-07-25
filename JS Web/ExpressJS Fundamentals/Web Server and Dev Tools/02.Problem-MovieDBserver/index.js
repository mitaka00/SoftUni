const http = require('http');
const port = 7030;
const handlers = require('./handlers/index.js');

const server = http.createServer((req, res) => {
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
});

server.listen(port);

console.log(`Server listening on port:${port}`);
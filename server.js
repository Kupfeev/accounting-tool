const http = require('http');
const port = process.env.PORT || 3000;

const middleware = require('./app');

const server = http.createServer(middleware);
server.listen(port);